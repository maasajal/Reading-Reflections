import {
  BarChart as BChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { getStoredReadBooks } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const BarChart = () => {
  const books = useLoaderData();
  const [readBook, setReadBook] = useState([]);
  useEffect(() => {
    const storedBookIds = getStoredReadBooks();
    if (books.length > 0) {
      const readBook = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setReadBook(readBook);
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
    <div>
      <BChart
        width={800}
        height={400}
        data={readBook}
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
          {readBook.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
        <Tooltip />
      </BChart>
    </div>
  );
};
export default BarChart;
