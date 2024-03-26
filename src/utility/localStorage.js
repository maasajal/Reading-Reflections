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
  }
};
export { getStoredReadBooks, saveReadBook, getStoredWishlist, saveWishlist };
