import { createSlice } from "@reduxjs/toolkit";

const hospital = createSlice({
  name: "hospital",
  initialState: {
    Patients: [],
    hospitalDetail: {
      name: "",
      phone: "",
      mail: "",
      residentAddress: "",
    },
  },
  reducers: {},
});

// export const { pushrecord } = hospital.actions;
export default hospital.reducer;
