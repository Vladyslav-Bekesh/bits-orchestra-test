import { useEffect, useState } from "react";
import BookTable from "../../components/BookTable";
import Filter from "../../components/Filter";
import {
  TBooks,
  TFilter,
  TOnChangeActivatedBook,
  TOnDelete,
  changeActivatedBook,
  deleteBook,
  getBooks,
} from "../../utils";

const Dashboard: React.FC = () => {
  const [books, setBooks] = useState<TBooks>([]);
  const [filter, setFilter] = useState<TFilter>("Active");

  const filteredBooks = books.filter((book) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return book.activated;
    } else if (filter === "Deactivated") {
      return !book.activated;
    }

    return false;
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks();
        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const onDelete: TOnDelete = async (isbn, activated) => {
    try {
      if (activated) {
        throw new Error("Activated book can’t be deleted");
      }
      await deleteBook(isbn, activated);

      const updatedBooks = await getBooks();
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const onChangeActivatedBook: TOnChangeActivatedBook = async (state, id) => {
    try {
      await changeActivatedBook(state, id);

      const updatedBooks = await getBooks();
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <>
      <Filter setFilter={setFilter} filter={filter}></Filter>
      <span>
        Showing {filteredBooks.length} elements of {books.length}
      </span>

      <BookTable
        books={filteredBooks}
        onDelete={onDelete}
        onChangeActivatedBook={onChangeActivatedBook}
      />
    </>
  );
};

export default Dashboard;
