import { ToastContainer, toast } from "react-toastify";

const getStoredReadBooks = () => {
  const storedReadBook = localStorage.getItem("read-book");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};

const saveReadBook = (bookId) => {
  const storedReadBooks = getStoredReadBooks();
  const exists = storedReadBooks.find((readBookId) => readBookId === bookId);
  if (!exists) {
    storedReadBooks.push(bookId);
    localStorage.setItem("read-book", JSON.stringify(storedReadBooks));
    toast("Book added to Read Books successfully!");
  } else {
    toast("You have Already Read this Book!");
  }
};

const getStoredWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};

const saveWishlist = (bookId) => {
  const storedWishlist = getStoredWishlist();
  const exists = storedWishlist.find((readBookId) => readBookId === bookId);
  if (!exists) {
    storedWishlist.push(bookId);
    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
    toast(`Book is added to Wishlists successfully!`);
  } else {
    toast(`Already added to Wishlist!`);
  }
};
export { getStoredReadBooks, saveReadBook, getStoredWishlist, saveWishlist };
