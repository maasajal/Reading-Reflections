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
  const [sortRead, setSortRead] = useState([]);
  const [sortWish, setSortWish] = useState([]);
  const [isSort, setIsSort] = useState(false);
  const handleSortMenu = () => {
    setIsSort(!isSort);
  };

  useEffect(() => {
    const storedWishlistIds = getStoredWishlist();
    const storedBookIds = getStoredReadBooks();

    if (books.length > 0) {
      const bookWishlist = books.filter((wish) =>
        storedWishlistIds.includes(wish.bookId)
      );
      setWishlist(...wishlist, bookWishlist);
      setSortWish(bookWishlist);
    }
    if (books.length > 0) {
      const bookRead = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setReadBook(...readBook, bookRead);
      setSortRead(bookRead);
    }
  }, []);
  // Implement sorting in descending order
  const handleSortBooks = (filter) => {
    console.log(filter);
    if (filter === "rating") {
      const rating = sortRead.sort((a, b) => b.rating - a.rating);
      const wishRating = wishlist.sort((a, b) => b.rating - a.rating);
      setSortRead(rating);
      setSortWish(wishRating);
    } else if (filter === "totalPages") {
      const numberPages = sortRead.sort((a, b) => b.totalPages - a.totalPages);
      const numberOfPages = wishlist.sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setSortRead(numberPages);
      setSortWish(numberOfPages);
    } else if (filter === "yearOfPublishing") {
      const year = sortRead.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      const publisheYear = wishlist.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setSortRead(year);
      setSortWish(publisheYear);
    }
    setIsSort(false);
  };
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold my-8 bg-[#1313130D] py-6 rounded-xl">
          Books
        </h2>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] hover:border-[#23BE0A] hover:bg-transparent text-white hover:text-[#23BE0A]"
            onClick={handleSortMenu}
          >
            Sort By <IoIosArrowDown className="text-xl" />
          </div>

          {isSort && (
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSortBooks("rating");
                  }}
                >
                  Rating
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSortBooks("totalPages");
                  }}
                >
                  Number of pages
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSortBooks("yearOfPublishing");
                  }}
                >
                  Publisher year
                </a>
              </li>
            </ul>
          )}
        </div>
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
          {sortRead.map((read) => (
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
          {sortWish.map((wish) => (
            <StoredBooks key={wish.bookId} book={wish} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ListedBooks;
