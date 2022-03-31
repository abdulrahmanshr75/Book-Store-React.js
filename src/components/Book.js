import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/Books/booksReducer";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li className="bookContent">
      <h3 className="title">{book.title}</h3>
      {book.author}
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(book.id));
        }}
        className="remove"
      >
        Remove Book
      </button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
