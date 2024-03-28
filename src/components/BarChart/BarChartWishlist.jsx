import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { getStoredWishlist } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const BarChartWishlist = () => {
  const books = useLoaderData();
  const [wishlistChart, setWishlistChart] = useState([]);
  useEffect(() => {
    const storedBookIds = getStoredWishlist();
    if (books.length > 0) {
      const wishChart = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setWishlistChart(wishChart);
    }
  }, []);

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
      Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="bg-[#13131308] flex items-center justify-center py-28 rounded-xl">
      <BarChart
        width={1000}
        height={400}
        data={wishlistChart}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {wishlistChart.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
        <Tooltip />
      </BarChart>
    </div>
  );
};
export default BarChartWishlist;
