import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadBook, saveWishlist } from "../../utility/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleReadBooks = () => {
    saveReadBook(idInt);
  };
  const handleWishlists = () => {
    saveWishlist(idInt);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 mb-32">
      <div className="bg-[#1313130D] rounded-xl p-12 flex items-center justify-center">
        <img src={image} alt={bookName} className="shadow-2xl" />
      </div>
      <div>
        <h2 className="text-4xl font-bold">{bookName} </h2>
        <p className="py-4">By: {author}</p>
        <p className="py-3 border-t border-b">{category}</p>
        <p className="py-6 leading-8">
          <strong>Review: </strong> {review}{" "}
        </p>
        <div className="flex flex-wrap gap-4 my-4 items-center">
          <strong>Tag </strong>
          {tags.map((tag) => (
            <p className="text-[#23BE0A] bg-[#23BE0A0D] rounded-xl py-1 px-2 text-center">
              {tag}
            </p>
          ))}
        </div>
        <hr />
        <div>
          <div className="grid grid-cols-2 my-3">
            <p>Number of Pages: </p>
            <p>{totalPages} </p>
          </div>
          <div className="grid grid-cols-2 my-3">
            <p>Publisher: </p>
            <p>{publisher} </p>
          </div>
          <div className="grid grid-cols-2 my-3">
            <p>Year of Publishing: </p>
            <p>{yearOfPublishing} </p>
          </div>
          <div className="grid grid-cols-2 my-3">
            <p>Rating: </p>
            <p>{rating} </p>
          </div>
        </div>
        <div>
          <button
            onClick={handleReadBooks}
            className="btn border-[#1313134D] bg-transparent px-7 mr-4 hover:bg-[#23BE0A] hover:text-white"
          >
            Read
          </button>
          <button
            onClick={handleWishlists}
            className="btn bg-[#50B1C9] text-white px-7 hover:bg-[#23BE0A]"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default BookDetails;
