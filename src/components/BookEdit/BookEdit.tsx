// EditBookForm.tsx
import React from "react";
import { TBook } from "../../utils";
import BookInfo from "../BookInfo";
import EditForm from "../BookFormEdit";
import { Container, ValuesFormContainer } from "./BookEdit.styled";

type TEditBookForm = {
  book: TBook;
  onSetNewBook: (newBook: TBook) => void;
};

const EditBookForm: React.FC<TEditBookForm> = ({ book, onSetNewBook }) => {
  const onSubmit = (newBook: TBook) => {
    onSetNewBook(newBook);
  };

  return (
    <div>
      <Container>
        <BookInfo book={book} />

        <ValuesFormContainer>
          <span>New Values</span>

          <EditForm book={book} onSubmit={onSubmit} />
        </ValuesFormContainer>

      </Container>
    </div>
  );
};

export default EditBookForm;
