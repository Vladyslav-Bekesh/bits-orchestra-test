import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getBook, TBook } from "../../utils";
import EditBookForm from "../../components/EditBookForm/EditBookForm";
import moment from "moment-timezone";

function AddEditBook() {
  const [book, setBook] = useState<TBook | undefined>(undefined);
  const [newBook, setNewBook] = useState<TBook | undefined>(undefined);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchBook = async (id: string) => {
      try {
        const bookData = await getBook(id);
        setBook(bookData);
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    };

    if (id) {
      fetchBook(id);
    }
  }, [id]);

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const takeLocalTimeZone = (): string => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (userTimeZone === "Europe/Kiev") {
      return "Europe/Kyiv";
    }
    return userTimeZone;
  };

  const ZERO_TIME_ZONE = "Europe/Dublin";

  const zeroTimeZoneTime = (): string => {
    return moment().utc().tz(ZERO_TIME_ZONE).format("LLL");
  };

  console.log("zeroTimeZoneTime", zeroTimeZoneTime());
  console.log("takeLocalTimeZone", takeLocalTimeZone());

  return (
    <>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {book && <EditBookForm book={book} onSetNewBook={setNewBook} />}
    </>
  );
}

export default AddEditBook;
