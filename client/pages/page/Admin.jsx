import React from "react";
import HospitalList from "../../components/HospitalList";
import CreateHospital from "../../components/CreateHospital";

function Admin() {
  return (
    <div className="flex flex-col space-y-10 justify-center py-10 bg-gray-900 ">
      <CreateHospital />
      <HospitalList />
    </div>
  );
}

export default Admin;
