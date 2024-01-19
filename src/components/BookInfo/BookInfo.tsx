import { TBook } from "../../utils";
import { ValuesContainer } from "./BookInfo.styled";

type TBookInfo = {
  book: TBook;
};

const BookInfo: React.FC<TBookInfo> = ({ book }) => {
  const bookKeys = Object.keys(book) as Array<keyof TBook>;
  
  return (
    <div>
      <span>Old Values</span>
      {bookKeys.map((bookKey) => (
        <ValuesContainer key={bookKey}>
          {bookKey === "activated" ? (
            <></>
          ) : (
            <>
              <span>{bookKey}</span>
              <span>{book[bookKey]}</span>
            </>
          )}
        </ValuesContainer>
      ))}
    </div>
  );
};

export default BookInfo