import { Item } from "./BookTable.styled";
const TableHeader: React.FC = () => {
  return (
    <Item>
      <span>Title</span>
      <span>Author</span>
      <span>Category</span>
      <span>ISBN</span>
      <span>Created at</span>
      <span>Update at</span>
      <span>Actions</span>
    </Item>
  );
};

export default TableHeader;
