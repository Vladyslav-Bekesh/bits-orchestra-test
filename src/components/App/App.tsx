import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import AddEditBook from "../../pages/AddEditBook";
import Layout from "../Layout";
import {
  getBooks,
  deleteBook,
  changeActivatedBook,
  TBooks,
  TOnDelete,
  TOnChangeActivatedBook,
} from "../../utils";

function App() {
  const [books, setBooks] = useState<TBooks>([]);

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

  const onDelete: TOnDelete = async (isbn) => {
    try {
      await deleteBook(isbn);

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
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <Dashboard
                books={books}
                onDelete={onDelete}
                onChangeActivatedBook={onChangeActivatedBook}
              />
            }
          />
          <Route path="/add-edit-book/:id" element={<AddEditBook />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
