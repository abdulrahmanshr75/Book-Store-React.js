import React from 'react';
import { useDispatch } from 'react-redux';
import { categoriesMessage } from '../redux/Categories/categoriesReducer';

const Categories = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(categoriesMessage());
  };
  return (
    <div className="categories-container">
      <h1>Under construction</h1>
      <button onClick={() => handleClick()}>Check Status</button>
    </div>
  );
};

export default Categories;
