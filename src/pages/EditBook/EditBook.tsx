import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBook, TBook } from "../../utils";
import EditBookForm from "../../components/EditBookForm/AddEditBookForm";
import { editBook } from "../../utils";
type TAddEditBook = {
  pageType: "edit" | "create";
};
const AddEditBook: React.FC<TAddEditBook> = ({ pageType }) => {
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
          // Додайте необхідну навігацію після успішного редагування
          navigate("/dashboard");
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
    <EditBookForm book={book} onSetNewBook={setNewBook} pageType={pageType} />
  ) : null;
};

export default AddEditBook;
