import { v4 as uuidv4 } from "uuid";

const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";
const BOOK_REMOVED = "BOOK_REMOVED";
const BOOK_ADDED = "BOOK_ADDED";
const FETCH_BOOKS = "FETCH_BOOKS";
const BOOKS_FETCHED = "BOOKS_FETCHED";

const bookAdded = (book) => ({
  type: BOOK_ADDED,
  payload: {
    book,
  },
});

export const addBook = (data) => (dispatch) => {
  const book = {
    item_id: uuidv4(),
    title: data.title,
    author: data.author,
    category: data.category || "",
  };

  const url =
    "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLbwnHBRxzSeJhGdUqVi/books";

  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  };

  fetch(url, settings).then((res) => {
    if (res.status === 201) dispatch(bookAdded(book));
  });
};

const bookRemoved = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});
export const removeBook = (id) => (dispatch) => {
  let url =
    "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLbwnHBRxzSeJhGdUqVi/books/";
  url += id;
  const settings = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      book_id: id,
    }),
  };

  fetch(url, settings).then((res) => {
    if (res.status === 201) dispatch(bookRemoved(id));
  });
};

const booksFetched = (books) => ({
  type: BOOKS_FETCHED,
  payload: {
    books,
  },
});

export const fetchBooks = () => (dispatch) => {
  const url =
    "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLbwnHBRxzSeJhGdUqVi/books";

  fetch(url)
    .then((res) => res.json())
    .then((books) => {
      const booksList = Object.keys(books).map((bookID) => ({
        id: bookID,
        ...books[bookID][0],
      }));
      dispatch(booksFetched(booksList));
    });
};

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return fetchBooks();
    case BOOKS_FETCHED:
      return action.payload.books;
    case ADD_BOOK:
      return addBook(action.payload.data);
    case BOOK_ADDED:
      return state.concat({
        id: action.payload.book.item_id,
        title: action.payload.book.title,
        author: action.payload.book.author,
        category: action.payload.book.category,
      });
    case REMOVE_BOOK:
      return removeBook(action.payload.id);
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
