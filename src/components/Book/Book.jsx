import { MdOutlineStarOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, category, rating } = book;
  return (
    <>
      <Link to={`/book/${bookId}`}>
        <div className="card border p-6">
          <figure className="bg-[#F3F3F3] rounded-xl p-5">
            <img
              src={image}
              alt={bookName}
              className="max-h-96"
            />
          </figure>
          <div className="flex flex-wrap gap-2 my-4">
            {tags.map((tag, idx) => (
              <p
                key={idx}
                className="text-[#23BE0A] bg-[#23BE0A0D] rounded-xl py-1 px-2 text-center"
              >
                {tag}
              </p>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold leading-normal">
            {bookName}{" "}
          </h2>
          <p className="my-5">By: {author}</p>
          <div className="card-actions flex justify-between border-t border-dashed py-5">
            <p>{category} </p>
            <p className="flex items-center gap-2">
              {" "}
              <span>{rating}</span> <MdOutlineStarOutline />{" "}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
Book.prototype = {
  book: PropTypes.object.isRequired,
};
export default Book;
