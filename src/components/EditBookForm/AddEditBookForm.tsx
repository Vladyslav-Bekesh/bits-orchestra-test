import React, { ChangeEvent, FormEvent, useState } from "react";
import { TBook, localToUtcTime, takeLocalTime } from "../../utils";
import {
  Container,
  ValuesContainer,
  ValuesFormContainer,
} from "./AddEditBookForm.styled";
import { useNavigate } from "react-router-dom";

type TEditBookForm = {
  book: TBook;
  onSetNewBook: any;
  pageType: "edit" | "create";
};

type TNewBook = Pick<Partial<TBook>, "title" | "author" | "category">;

const EditBookForm: React.FC<TEditBookForm> = ({
  book,
  onSetNewBook,
  pageType,
}) => {
  const { title, author, category } = book;
  const bookKeys = Object.keys(book) as Array<keyof TBook>;

  const navigate = useNavigate();

  const [newBookValues, setNewBookValues] = useState<TNewBook>({
    title: `${title}`,
    author: `${author}`,
    category: `${category}`,
  });

  const sanitizeValue = (value: string | number | null | undefined) => {
    return !value ? "" : value;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBookValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filteredNewBook = {
      ...Object.fromEntries(
        Object.entries(newBookValues).filter(([key, value]) => value !== "")
      ),
      updated_at: localToUtcTime(takeLocalTime()),
    };

    const mergedBook = { ...book, ...filteredNewBook };
    console.log(mergedBook);

    onSetNewBook({
      ...mergedBook,
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <div>
          <span>Old Values</span>
          {bookKeys.map((bookKey) => (
            <ValuesContainer key={bookKey}>
              {bookKey === "activated" ? (
                <></>
              ) : (
                <>
                  <span>{bookKey}</span>
                  <span>{sanitizeValue(book[bookKey])}</span>
                </>
              )}
            </ValuesContainer>
          ))}
        </div>

        <ValuesFormContainer>
          <span>New Values</span>

          <ValuesContainer>
            <span>Title</span>
            <input
              type="text"
              name="title"
              value={newBookValues.title}
              onChange={handleChange}
            />

            <span>Author</span>
            <input
              type="text"
              name="author"
              value={newBookValues.author}
              onChange={handleChange}
            />

            <span>Category</span>
            <input
              type="text"
              name="category"
              value={newBookValues.category}
              onChange={handleChange}
            />
          </ValuesContainer>
          <button type="submit">Submit</button>
        </ValuesFormContainer>
      </Container>
    </form>
  );
};

export default EditBookForm;
