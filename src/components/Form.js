import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/Books/booksReducer';

const Form = ({ categories }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const updateTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const updateAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <h2>add a new book</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addBook({
              title: title.trim,
              author,
            }),
          );
          setAuthor('');
          setTitle('');
        }}
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={updateTitle}
          placeholder="Title"
          pattern=".*\S+.*"
          required
        />
        <input
          type="text"
          name="author"
          value={author}
          onChange={updateAuthor}
          placeholder="Author..."
          pattern=".*\S+.*"
          required
        />
        <select name="category">
          {categories.forEach((item) => (
            <option value="Horror">{item.title}</option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Form;
