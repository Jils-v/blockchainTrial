import React from "react";
import HospitalList from "../components/HospitalList";
import CreateHospital from "../components/CreateHospital";

function Admin({ Con }) {
  return (
    <div className="flex flex-col space-y-10 justify-center py-10 bg-gray-900 ">
      <CreateHospital Con={Con} />
      <HospitalList Con={Con} />
    </div>
  );
}

export default Admin;
