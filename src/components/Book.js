import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/booksReducer';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li className="bookContent">
      <div className="details">
        <h5 className="category">{book.category}</h5>
        <h3 className="title">{book.title}</h3>
        <h4 className="author">{book.author}</h4>
        <div className="buttons-container">
          <button className="button">Comments</button>
          <span className="gray">|</span>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
            className="remove"
          >
            Remove
          </button>
          <span className="gray">|</span>
          <button className="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="wrapper" data-anim="base wrapper">
          <div className="circle" data-anim="base left" />
          <div className="circle" data-anim="base right" />
        </div>
        <div className="percent">
          <span className="percentage">100%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="chapter-section">
        <div>
          <div className="Line-2" />
        </div>
        <div className="wrap">
          <span className="current">CURRENT CHAPTER</span>
          <span className="chapter">Chapter 17</span>
          <span className="update">UPDATE PROGRESS</span>
        </div>
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
