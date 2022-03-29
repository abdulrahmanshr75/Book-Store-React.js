import React from 'react';
import { useDispatch } from 'react-redux';
import Message from '../redux/Categories/categoriesReducer';

const dispatch = useDispatch();

const Categories = () => (
  <div className="categories-container">
    <button onClick={dispatch(Message)}>Check Status</button>
  </div>
);

export default Categories;
