import React from "react";
import Book from "./Book";
import Form from "./Form";

const Books = () => {
  return (
    <div className="main-container">
      <div className="Books-container">
        <h1>Books list :</h1>
        <ul className="booklist">
          <Book />
        </ul>
        <button className="remove-book"> Remove</button>
      </div>
      <Form />
    </div>
  );
};

export default Books;
