import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import categoriesReducer from './Categories/categoriesReducer';
import booksReducer from './Books/booksReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
