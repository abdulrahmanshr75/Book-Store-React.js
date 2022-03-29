import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/booksReducer';

const Book = (book) => {
  const { title, author, id } = book;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="bookStore">
      <div className="details-clm">
        <p>{author}</p>
        <p>{title}</p>
        <button type="button" onClick={() => handleDelete(id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Book;
