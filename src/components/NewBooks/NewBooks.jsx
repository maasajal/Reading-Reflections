import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const NewBooks = () => {
  const newBooks = useLoaderData();

  return (
    <>
      <div className="text-center my-12">
        <h2 className="text-5xl font-bold">New Reading Reflections</h2>
        <p className="my-6">New books review are coming soon...</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newBooks.map((book) => (
          <div className="border-2 border-[#23BE0A] rounded-xl p-6">
            <h2 className="text-2xl font-bold">{book.title} </h2>
            <p><strong>Author:</strong> {book.author} </p>
            <p><strong>Category:</strong> {book.genre} </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default NewBooks;
