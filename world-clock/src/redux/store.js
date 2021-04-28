// import { createStore } from 'redux';
//
// import reducer from "./reducer";
import { configureStore } from '@reduxjs/toolkit';
import slice from './reducers/slice';

const store = configureStore({
  reducer: slice,
});

export default store;
