import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const booksList = async () => {
      const response = await fetch("./books.json");
      const data = await response.json();
      setBooks(data);
    };
    booksList();
  }, []);
  return (
    <div className="my-20">
      <div className="text-center my-10">
        <h2 className="text-4xl font-bold">Books</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};
export default Books;
