import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/Books/booksReducer';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  });
  if (books.length) {
    return (
      <ul id="book-list">
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h3>No Books yet</h3>
    </div>
  );
};

export default Books;
