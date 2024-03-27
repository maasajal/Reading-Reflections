import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import BookDetails from "./components/BookDetails/BookDetails";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import NewBooks from "./components/NewBooks/NewBooks";
import Blog from "./components/Blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/new-books",
        element: <NewBooks />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
