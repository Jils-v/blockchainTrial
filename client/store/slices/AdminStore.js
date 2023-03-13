import { createSlice } from "@reduxjs/toolkit";

const admin = createSlice({
  name: "admin",
  initialState: {
    Hospitals: [],
  },
  reducers: {
    sethospitaldata: (state, actions) => {
      state.Hospitals.push(actions.payload);
    },
    fetchhospitaldata: (state, actions) => {
      actions.payload = actions.payload.map((item) => {
        const data = {
          name: item.name,
          mail: item.mail,
          hospitalAddress: item.hospitalAddress,
          phone: Number(item.phone),
        };
        state.Hospitals.push(data);
      });
    },
  },
});

export const { sethospitaldata, fetchhospitaldata } = admin.actions;
export default admin.reducer;
