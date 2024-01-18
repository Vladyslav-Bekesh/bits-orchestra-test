import BookTable from "../../components/BookTable";
import { TBooks, TOnChangeActivatedBook, TOnDelete } from "../../utils";

type DashboardProps = {
  books: TBooks;
  onDelete: TOnDelete;
  onChangeActivatedBook: TOnChangeActivatedBook;
};

const Dashboard: React.FC<DashboardProps> = ({
  books,
  onDelete,
  onChangeActivatedBook,
}) => {
  return (
    <BookTable
      books={books}
      onDelete={onDelete}
      onChangeActivatedBook={onChangeActivatedBook}
    />
  );
};

export default Dashboard;
