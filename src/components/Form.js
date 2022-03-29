import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import { addBook } from '../redux/Books/booksReducer';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: nextId(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="form-container">
      <form onSubmit={submitBookToStore}>
        <input
          type="text"
          placeholder="Author name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book title..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default Form;
