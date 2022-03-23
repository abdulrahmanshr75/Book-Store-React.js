import React from 'react';

const Form = () => (
  <div className="add-book">
    <h1>Add a new Book</h1>
    <form className="form">
      <label className="text-label">Book Title</label>
      <input className="input" type="text" />
      <label className="text-label">Book Author</label>
      <input className="input" type="text" />
      <input className="submit-button" type="submit" />
    </form>
  </div>
);

export default Form;
