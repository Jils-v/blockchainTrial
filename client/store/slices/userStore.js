import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    usertype: "",
    isUserLoggedIn: false,
    currentAccount: "",
    isConnected: false,
    Hospitals: [],
    Patients: [],
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
    setuser: (state, actions) => {
      state.usertype = actions.payload;
    },

    setconnect: (state, actions) => {
      state.isConnected = actions.payload.isconnect;
      state.currentAccount = actions.payload.account;
    },
    setpatientdata: (state, actions) => {
      state.userPersonalDetail = {
        name: actions.payload.name,
        mail: actions.payload.mail,
        phone: actions.payload.phone,
        residentAddress: actions.payload.residentAddress,
      };
    },
    setlogout: (state, actions) => {
      state.isConnected = false;
    },
    sethospitaldata: (state, actions) => {
      state.Hospitals.push(actions.payload);
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

export const { setuser, setconnect, setpatientdata, sethospitaldata } = slice.actions;
export default slice.reducer;
