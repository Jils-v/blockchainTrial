import React from "react";
import Information from "../components/Information";
import UserList from "../components/HospitalList";

function User({ Con }) {
  return (
    <div>
      <Information Con={Con} />
      {/* <UserList /> */}
    </div>
  );
}

export default User;
