import { combineReducers, createStore } from 'redux';
import categoriesReducer from './Categories/categoriesReducer';
import booksReducer from './Books/booksReducer';

const rootReducer = combineReducers({
  categoriesReducer,
  booksReducer,
});

const store = createStore(rootReducer);

export default store;
