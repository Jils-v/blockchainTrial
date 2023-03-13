import { createSlice } from "@reduxjs/toolkit";

const usertype = createSlice({
  name: "usertype",
  initialState: {
    usertype: "",
    currentAccount: "",
    isConnected: false,
  },
  reducers: {
    setuser: (state, actions) => {
      state.usertype = actions.payload;
    },

    setconnect: (state, actions) => {
      state.isConnected = actions.payload.isconnect;
      state.currentAccount = actions.payload.account;
    },
  },
});

export const { setuser, setconnect } = usertype.actions;
export default usertype.reducer;
