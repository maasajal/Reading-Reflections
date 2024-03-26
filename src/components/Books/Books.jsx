import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [dataLength, setDataLength] = useState(6);

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
        {books.slice(0, dataLength).map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
      <div
        className={`text-center my-12 ${
          dataLength === books.length ? "hidden" : ""
        }`}
      >
        <button
          onClick={() => setDataLength(books.length)}
          className="btn bg-[#23BE0A] hover:border-[#23BE0A] hover:bg-transparent text-white hover:text-[#23BE0A] "
        >
          Show All Books
        </button>
      </div>{" "}
    </div>
  );
};
export default Books;
