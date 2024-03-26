import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import {
  getStoredReadBooks,
  getStoredWishlist,
} from "../../utility/localStorage";
import StoredBooks from "../StoredBooks/StoredBooks";
const ListedBooks = () => {
  const books = useLoaderData();
  const [readBook, setReadBook] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredReadBooks();
    if (books.length > 0) {
      const readBook = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setReadBook(readBook);
    }
    const storedWishlistIds = getStoredWishlist();
    if (books.length > 0) {
      const wishlist = books.filter((wish) =>
        storedWishlistIds.includes(wish.bookId)
      );
      setWishlist(wishlist);
    }
  }, []);
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold my-8 bg-[#1313130D] py-6 rounded-xl">
          Books
        </h2>
        <button className="btn bg-[#23BE0A] hover:border-[#23BE0A] hover:bg-transparent text-white hover:text-[#23BE0A]">
          Sort By <IoIosArrowDown className="text-xl" />{" "}
        </button>
      </div>

      <div role="tablist" className="tabs tabs-lifted my-10">
        <input
          type="radio"
          name="books"
          role="tab"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {readBook.map((read) => (
            <StoredBooks key={read.bookId} book={read} />
          ))}
        </div>

        <input
          type="radio"
          name="books"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {wishlist.map((wish) => (
            <StoredBooks key={wish.bookId} book={wish} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ListedBooks;
