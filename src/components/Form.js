import React from "react";

const Form = () => {
  return (
    <div className="add-book">
      <h1>Add a new Book</h1>
      <form className="form">
        <label className="text-label">Book Title</label>
        <input className="input" type="text"></input>
        <label className="text-label">Book Author</label>
        <input className="input" type="text"></input>
        <input className="submit-button" type="submit"></input>
      </form>
    </div>
  );
};

export default Form;
