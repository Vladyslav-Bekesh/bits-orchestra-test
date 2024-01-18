import React from "react";
import {
  transormCategoryName,
  TBooks,
  TOnChangeActivatedBook,
  TOnDelete,
} from "../../utils";
import { List, Item } from "./BookTable.styled";
import { NavLink } from "react-router-dom";

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
      {books.map(
        ({
          id,
          activated,
          title,
          author,
          category,
          ISBN,
          created_at,
          updated_at,
        }) => (
          <Item key={id} activated={activated}>
            <span>{title}</span>
            <span>{author}</span>
            <span>{transormCategoryName(category)}</span>
            <span>{ISBN}</span>
            <span>{created_at}</span>
            <span>{updated_at ? updated_at : "--"}</span>

            <div>
              <button onClick={() => onChangeActivatedBook(activated, id)}>
                {activated ? "Deactivate" : "Activate"}
              </button>
              <button onClick={() => onDelete(id)}>Delete</button>
              <NavLink to={`/add-edit-book/${id}`}>Edit</NavLink>
            </div>
          </Item>
        )
      )}
    </List>
  );
};

export default BookTable;
