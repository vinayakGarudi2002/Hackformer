// import { applyMiddleware} from "redux"; 
// import thunk from "redux-thunk"
import reducers from "./reducers";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: reducers,
    middleware: [...getDefaultMiddleware(), thunk],
  });

export default store