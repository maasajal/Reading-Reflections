const Banner = () => {
  return (
    <>
      <div className="bg-[#1313130D] rounded-3xl my-12 px-28 py-20">
        <div className="flex-col lg:flex-row flex items-center justify-between gap-20">
          <div className="flex-1 max-w-md">
            <h1 className="text-5xl font-bold leading-normal mb-12">
              Books to freshen up your
              <span className=" text-[#23BE0A]"> bookshelf</span>
            </h1>
            <button className="btn px-8 bg-[#23BE0A] text-white">
              View The List
            </button>
          </div>
          <img
            src="./images/banner_book.png"
            className="max-w-md rounded-lg "
            alt="Banner Book"
          />
        </div>
      </div>
    </>
  );
};
export default Banner;