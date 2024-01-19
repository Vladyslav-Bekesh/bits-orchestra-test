import { useEffect, useState } from "react";
import { TBook, createBook } from "../../utils";
import BookFormCreate from "../../components/BookFormCreate";

const CreateBook: React.FC = () => {
  const [newBook, setNewBook] = useState<TBook | undefined>();

  useEffect(() => {
    const addNewBook = async (newBook: TBook) => {
      try {
        
        
        await createBook(newBook);

        console.log("Книга успішно додана!");
      } catch (error) {
        console.error("Помилка при додаванні книги:", error);
      }
    };

    if (newBook) {
      addNewBook(newBook);
    }
  }, [newBook]);

  return <BookFormCreate setNewBook={setNewBook} />;
};

export default CreateBook;
