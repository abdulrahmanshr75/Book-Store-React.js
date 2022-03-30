import React from 'react';
import { useDispatch } from 'react-redux';
import Message from '../redux/Categories/categoriesReducer';

const dispatch = useDispatch();

const checkStatus = () => {
  dispatch(Message);
};

const Categories = () => (
  <div className="categories-container">
    <button onClick={checkStatus()}>Check Status</button>
  </div>
);

export default Categories;
