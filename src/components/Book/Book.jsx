import { MdOutlineStarOutline } from "react-icons/md";
const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, category, rating } = book;
  return (
    <>
      <div className="card border p-6">
        <figure>
          <img
            src={image}
            alt={bookName}
            className="bg-[#F3F3F3] rounded-xl p-5"
          />
        </figure>
        <div className="">
          <div className="flex flex-wrap gap-2 my-4">
            {tags.map((tag) => (
              <p className="text-[#23BE0A] bg-[#23BE0A0D] rounded-xl py-1 px-2 text-center">
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
      </div>
    </>
  );
};
export default Book;
