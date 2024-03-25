import { IoIosArrowDown } from "react-icons/io";
const ListedBooks = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold my-8 bg-[#1313130D] py-6 rounded-xl">
          Books
        </h2>
        <button className="btn bg-[#23BE0A] text-white">
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
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Read Books
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
          Wishlist Books
        </div>
      </div>
    </>
  );
};
export default ListedBooks;
