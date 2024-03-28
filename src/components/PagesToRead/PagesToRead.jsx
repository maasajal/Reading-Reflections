import BarChart from "../BarChart/BarChart";
import BarChartWishlist from "../BarChart/BarChartWishlist";
const PagesToRead = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold my-8 bg-[#1313130D] py-6 rounded-xl">
          Bar Chart
        </h2>
      </div>
      <h2 className="text-4xl font-bold text-center my-12">
        Read book bar chart
      </h2>

      <BarChart />
      <h2 className="text-4xl font-bold text-center my-12">
        Wishlist bar chart
      </h2>
      <BarChartWishlist />
    </>
  );
};
export default PagesToRead;
