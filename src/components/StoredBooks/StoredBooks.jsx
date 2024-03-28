import { LuUsers2 } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";
import { MdPublishedWithChanges } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StoredBooks = ({ book }) => {
  const {
    image,
    bookId,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <>
      <div className="card card-side border md:p-6 shadow-xl mb-6 flex flex-col md:flex-row">
        <div className="md:max-w-56 bg-[#F3F3F3] rounded-xl max-h-full flex items-center mx-auto mt-6">
          <img src={image} alt={bookName} className="p-5" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{bookName} </h2>
          <p className="my-2">By: {author}</p>
          <div className="flex flex-wrap items-center gap-4 my-2">
            <strong>Tag</strong>
            {tags.map((tag, idx) => (
              <p
                key={idx}
                className="text-[#23BE0A] bg-[#23BE0A0D] rounded-full py-1 text-center"
              >
                {tag}
              </p>
            ))}
            <div className="flex items-center gap-3">
              <MdPublishedWithChanges className="text-2xl" />
              <p>Year of Publishing: {yearOfPublishing}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 my-2">
            <div className="flex items-center gap-3">
              <LuUsers2 className="text-2xl" />
              <p>Publisher: {publisher}</p>
            </div>
            <div className="flex items-center gap-3">
              <RiPagesLine className="text-2xl" />
              <p>Page: {totalPages}</p>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn bg-[#328EFF26] text-[#328EFF] hover:border-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A] rounded-full px-6">
              Category: {category}
            </button>
            <button className="btn bg-[#FFAC3326] text-[#FFAC33] hover:border-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A] rounded-full px-6">
              Rating: {rating}
              <MdOutlineStarOutline />
            </button>
            <Link to={`/book/${bookId}`}>
              <button className="btn bg-[#23BE0A] hover:border-[#23BE0A] hover:bg-transparent text-white hover:text-[#23BE0A] rounded-full px-6 hover:rounded-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
StoredBooks.prototype = {
  book: PropTypes.object.isRequired,
};
export default StoredBooks;
