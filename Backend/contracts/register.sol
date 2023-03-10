// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <=0.9.0;

contract register{

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

    address admin = 0xDfF6A078Eac1279823eD8189bB2ccd137bFc12e0;
    mapping (address => patientDetails) patient;
    mapping (address => hospitalDetails) hospital;

    function registerPatient(address _publicAddress, string memory _name, uint64 _phone, string memory _mail, string memory _residentAddress) public{
        patient[_publicAddress] = patientDetails(_name, _phone, _mail, _residentAddress);
    }

    function registerhospital(address _publicAddress,  string memory _name, uint64 _phone, string memory _mail, string memory _hospitalAddress) public{
        hospital[_publicAddress] = hospitalDetails(_name, _phone, _mail, _hospitalAddress);
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
}