import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usertype from "./slices/userStore";
import patient from "./slices/PatientStore";
import hospital from "./slices/HospitalStore";
import admin from "./slices/AdminStore";

const reducer = combineReducers({
  admin: admin,
  hospital: hospital,
  patient: patient,
  usertype: usertype,
});

const store = configureStore({
  reducer,
});

export default store;
