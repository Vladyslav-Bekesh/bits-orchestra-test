import React, { useState, FormEvent } from "react";
import { nanoid } from "nanoid";
import { TBook, localToUtcTime, takeLocalTime } from "../../utils";
import { Container } from "./BookFormCreate.styled";

type TBookFormCreate = {
  setNewBook: React.Dispatch<React.SetStateAction<TBook | undefined>>;
};

const BookFormCreate: React.FC<TBookFormCreate> = ({ setNewBook }) => {
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [ISBN, setISBN] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "ISBN":
        setISBN(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBook = {
      author,
      title,
      category,
      ISBN,
      id: nanoid(),
      created_at: localToUtcTime(takeLocalTime()),
      updated_at: "",
      activated: false,
    };
    
    setNewBook(newBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={handleChange} />

        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleChange}
        />

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleChange}
        />

        <label>ISBN:</label>
        <input type="text" name="ISBN" value={ISBN} onChange={handleChange} />

        <button type="submit">Create Book</button>
      </Container>
    </form>
  );
};

export default BookFormCreate;
