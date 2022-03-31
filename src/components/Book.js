import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/Books/booksReducer";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li className="bookContent">
      <h5 className="category">{book.category}</h5>
      <h3 className="title">{book.title}</h3>
      <h4 className="author">{book.author}</h4>
      <div className="buttons-container">
        <button className="button">Comments</button>
        <button
          type="button"
          onClick={() => {
            dispatch(removeBook(book.id));
          }}
          className="remove"
        >
          Remove
        </button>
        <button className="button">Edit</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
