// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <=0.9.0;

contract ehr{
    // struct patientData{
    //     address publicAddress;
    //     string name;
    //     uint age;
    //     string Disease;
    //     string Treatment;
    // }

    // mapping (address => patientData) public record;

    // function setter(address _publicAddress, string memory _name, uint _age, string memory _disease, string memory _treatment) public {
    //     record[_publicAddress] = patientData(_publicAddress, _name, _age, _disease, _treatment);
    // }

        struct patientData{
        string[] Disease;
        string[] Treatment;
        string[] TreatmentYear;
        }

        mapping (address => patientData) record;

        function getRecord (address _publicAddress) public view returns(patientData memory)
        {
            return record[_publicAddress];
        }

        // function getDisease(address _publicAddress) public view returns(string[] memory)
        // {
        //     patientData storage pd = record[_publicAddress];
        //     return pd.Disease;
        // }

        // function getTreatment(address _publicAddress) public view returns(string[] memory)
        // {
        //     patientData storage pd = record[_publicAddress];
        //     return pd.Treatment;
        // }

        // function getTreatmentYear(address _publicAddress) public view returns(string[] memory)
        // {
        //     patientData storage pd = record[_publicAddress];
        //     return pd.TreatmentYear;
        // }

        function addRecord(address _publicAddress, string[] memory _disease, string[] memory _treatment, string[] memory _treatmentYear) public {
            record[_publicAddress] = patientData(_disease, _treatment, _treatmentYear);
        }

        function updateRecord(address _publicAddress, string[] memory _disease, string[] memory _treatment, string[] memory _treatmentYear) public {
            patientData storage pd = record[_publicAddress];
            pd.Disease = _disease;
            pd.Treatment = _treatment;
            pd.TreatmentYear = _treatmentYear;
        }


        //-----------------------------------------------------------------------------



         struct patientDetails{
        string name;
        uint64 phone;
        string mail;
        string residentAddress;
    }

    struct hospitalDetails{
        string name;
        uint64 phone;
        string mail;
        string hospitalAddress;
    }

    address admin = 0x0C94a7382420E02cF69b2FE7e0cB24d0fa79CcDF;
    mapping (address => patientDetails) patient;
    mapping (address => hospitalDetails) hospital;
    hospitalDetails[] hospitals;

    function registerPatient(address _publicAddress, string memory _name, uint64 _phone, string memory _mail, string memory _residentAddress) public{
        patient[_publicAddress] = patientDetails(_name, _phone, _mail, _residentAddress);
    }

    function registerhospital(address _publicAddress,  string memory _name, uint64 _phone, string memory _mail, string memory _hospitalAddress) public{
        hospital[_publicAddress] = hospitalDetails(_name, _phone, _mail, _hospitalAddress);
        hospitals.push(hospitalDetails(_name, _phone, _mail, _hospitalAddress));
    }

    function updatePatient(address _publicAddress, string memory _name, uint64 _phone, string memory _mail, string memory _residentAddress) public {
        patientDetails storage pd = patient[_publicAddress];
        pd.name = _name;
        pd.phone = _phone;
        pd.mail = _mail;
        pd.residentAddress = _residentAddress;
    }

     function updatehospital(address _publicAddress,  string memory _name, uint64 _phone, string memory _mail, string memory _hospitalAddress) public{
        hospitalDetails storage dd = hospital[_publicAddress];
        dd.name = _name;
        dd.phone = _phone;
        dd.mail = _mail;
        dd.hospitalAddress = _hospitalAddress;
    }

    function check(address _publicAddress) public view returns(string memory)
    {
        string memory user = "none";
        if(_publicAddress == admin)
        {
            user = "admin";
        }
        if(!(keccak256(abi.encodePacked((patient[_publicAddress].name))) == keccak256(abi.encodePacked(("")))))
        {
            user = "patient";
        }
        if(!(keccak256(abi.encodePacked((hospital[_publicAddress].name))) == keccak256(abi.encodePacked(("")))))
        {
            user = "hospital";
        }
        return user;
    }

    function getAllHospital() public view returns(hospitalDetails[] memory)
    {
        return hospitals;
    }

    function getPatientDetail(address _publicAddress) public view returns(patientDetails memory)
    {
        return patient[_publicAddress];
    }

     function getHospitalDetail(address _publicAddress) public view returns(hospitalDetails memory)
    {
        return hospital[_publicAddress];
    }
}