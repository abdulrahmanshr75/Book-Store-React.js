import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const empty = (value) => value === undefined
  || value === null
  || (typeof value === 'object' && Object.keys(value).length === 0)
  || (typeof value === 'string' && value.trim().length === 0);

const Books = () => {
  const postBook = useSelector((state) => state.booksReducer);

  return (
    <div className="book-clm">
      {!empty(postBook)
        && postBook.map((post) => (
          <Book
            post={post}
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
          />
        ))}
      <Form />
    </div>
  );
};

export default Books;
