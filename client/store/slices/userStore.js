import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    usertype: "",
    isUserFound: false,
    // isUserLoggedIn: false,
    currentAccount: "",
    isConnected: false,
    userPersonalDetail: {
      name: "",
      phone: "",
      email: "",
      address: "",
      treatment: "",
      disease: "",
    },
  },
  reducers: {
    setuser: (state, actions) => {
      state.user = actions.payload;
    },
    setfound: (state, actions) => {
      state.isUserFound = actions.payload;
    },
    setLogin: (state, actions) => {
      state.isUserLoggedIn = actions.payload;
    },
    setconnect: (state, actions) => {
      console.log(actions.payload);
      state.isConnected = actions.payload.isconnect;
      state.currentAccount = actions.payload.account;
    },
    createuser: (state, actions) => {
      state.userPersonalDetail = {
        name: actions.payload.name,
        phone: actions.payload.phone,
        email: actions.payload.email,
        address: actions.payload.address,
      };
      state.usertype = "patient";
      state.isUserFound = true;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(sampThunk.pending, (state, actions) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(fetchvideo.fulfilled, (state, actions) => {
    //   state.isLoading = false;
    //   state.videodata = actions.payload;
    // });
    // builder.addCase(fetchvideo.rejected, (state, actions) => {
    //   console.log("error", actions.payload);
    //   state.isError = true;
    // });
  },
});

export const { setuser, setconnect, createuser } = slice.actions;
export default slice.reducer;
