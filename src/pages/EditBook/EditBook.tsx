import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBook, TBook } from "../../utils";
import AddEditBookForm from "../../components/BookEdit";
import { editBook } from "../../utils";

const EditBook: React.FC = () => {
  const [book, setBook] = useState<TBook | undefined>(undefined);
  const [newBook, setNewBook] = useState<TBook | undefined>(undefined);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async (id: string) => {
      try {
        const bookData = await getBook(id);
        setBook(bookData);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    if (id) {
      fetchBook(id);
    }
  }, [id]);

  useEffect(() => {
    const fetchEditBook = async (id: string, newBook: TBook) => {
      try {
        if (newBook) {
          await editBook(Number(id), newBook);
          navigate("/");
        }
      } catch (error) {
        console.error("Error editing book:", error);
      }
    };

    if (id && newBook) {
      fetchEditBook(id, newBook);
    }
  }, [id, newBook, navigate]);

  return book ? (
    <AddEditBookForm book={book} onSetNewBook={setNewBook} />
  ) : (
    <p>Book can`t be loaded</p>
  );
};

export default EditBook;
