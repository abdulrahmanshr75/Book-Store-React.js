import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/Books/booksReducer';

const Form = ({ categories }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(categories[0] || '');

  const updateTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const updateAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const updateCategory = (e) => {
    setCategory(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <h2 className="new">ADD A NEW BOOK</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook({ title, author, category }));
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
        <select
          name="category"
          value={category}
          onChange={updateCategory}
          className="categories"
        >
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button className="submit" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};
Form.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Form;
