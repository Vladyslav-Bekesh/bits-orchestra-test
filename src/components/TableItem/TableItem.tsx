import React from "react";
import {
  transormCategoryName,
  TBook,
  TOnChangeActivatedBook,
  TOnDelete,
} from "../../utils";
import { Item } from "./TableItem.styled";
import { NavLink } from "react-router-dom";

type TTableItemProps = {
  book: TBook;
  onDelete: TOnDelete;
  onChangeActivatedBook: TOnChangeActivatedBook;
};

const TableItem: React.FC<TTableItemProps> = ({
  book,
  onDelete,
  onChangeActivatedBook,
}) => {
  const {
    id,
    activated,
    title,
    author,
    category,
    ISBN,
    created_at,
    updated_at,
  } = book;

  return (
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

        {!activated && (
          <button onClick={() => onDelete(id, activated)}>Delete</button>
        )}

        <NavLink to={`/edit-book/${id}`}>Edit</NavLink>
      </div>
    </Item>
  );
};

export default TableItem;
