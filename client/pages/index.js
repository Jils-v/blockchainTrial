import WrongNetworkMessage from "../components/WrongNetworkMessage";

import { ethers } from "ethers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Connect from "../components/Connect";
import CreateAccount from "../components/CreateAccount";
import User from "./page/User";
import Doctor from "./page/Doctor";
import Admin from "./page/Admin";

export default function Home() {
  const data = useSelector((state) => {
    return state.slice;
  });
  console.log(data);

  return (
    <div className="overflow-hidden ">
      {!data.isConnected ? (
        <Connect />
      ) : data.usertype == "patient" ? (
        <User />
      ) : data.usertype == "doctor" ? (
        <Doctor />
      ) : data.usertype == "admin" ? (
        <Admin />
      ) : data.usertype == "none" ? (
        <CreateAccount />
      ) : (
        <WrongNetworkMessage />
      )}
    </div>
  );
}
