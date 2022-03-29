import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const empty = (value) => value === undefined
  || value === null
  || (typeof value === 'object' && Object.keys(value).length === 0)
  || (typeof value === 'string' && value.trim().length === 0);

const Books = () => {
  const addBook = useSelector((state) => state.booksReducer);
  return (
    <div className="books-container">
      {!empty(addBook)
        && addBook.map((book) => (
          <Book
            book={book}
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      <Form />
    </div>
  );
};

export default Books;
