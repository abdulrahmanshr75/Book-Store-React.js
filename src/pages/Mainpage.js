import React from "react";
import Form from "../components/Form";
import Books from "../components/Books";

const Mainpage = () => {
  const categories = [
    "Action",
    "Economy",
    "Novel",
    "Politics",
    "Science Fiction",
  ];
  return (
    <div className="main-container">
      <Books />
      <div className="line" />
      <Form categories={categories} />
    </div>
  );
};

export default Mainpage;
