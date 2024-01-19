// EditForm.tsx
import React, { ChangeEvent, FormEvent, useState } from "react";
import { ValuesContainer } from "./EditForm.styled";
import { TBook, localToUtcTime, takeLocalTime } from "../../utils";

type TEditFormProps = {
  book: TBook;
  onSubmit: (newBook: TBook) => void;
};

const EditForm: React.FC<TEditFormProps> = ({ book, onSubmit }) => {

  const [newBookValues, setNewBookValues] = useState({
    title: book.title,
    author: book.author,
    category: book.category,
    activated: book.activated,
    updated_at: book.updated_at,
  });

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

    onSubmit(mergedBook);

  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default EditForm;
