import { createSlice } from "@reduxjs/toolkit";

const patient = createSlice({
  name: "patient",
  initialState: {
    userPersonalDetail: {
      name: "",
      phone: "",
      mail: "",
      residentAddress: "",
      treatment: "",
      disease: "",
    },
  },
  reducers: {
    setpatientdata: (state, actions) => {
      state.userPersonalDetail = {
        name: actions.payload.name,
        mail: actions.payload.mail,
        phone: actions.payload.phone,
        residentAddress: actions.payload.residentAddress,
      };
    },
  },
});

export const { setpatientdata } = patient.actions;
export default patient.reducer;
