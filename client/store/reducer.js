import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import slice from "./slices/userStore";

const reducer = combineReducers({
  slice: slice,
});

const store = configureStore({
  reducer,
});

export default store;
