import React from "react";
import { TBooks, TOnChangeActivatedBook, TOnDelete } from "../../utils";
import { List } from "./BookTable.styled";
import TableItem from "../TableItem";
import TableHeader from "./BookTableHeader";

type TTableProps = {
  books: TBooks;
  onDelete: TOnDelete;
  onChangeActivatedBook: TOnChangeActivatedBook;
};

const BookTable: React.FC<TTableProps> = ({
  books,
  onDelete,
  onChangeActivatedBook,
}) => {
  return (
    <List>
      <TableHeader />
      {books.map((book) => (
        <TableItem
          key={book.id}
          book={book}
          onDelete={onDelete}
          onChangeActivatedBook={onChangeActivatedBook}
        ></TableItem>
      ))}
    </List>
  );
};

export default BookTable;
