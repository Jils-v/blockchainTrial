// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <=0.9.0;

contract records{
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
        address publicAddress;
        string name;
        uint age;
        string[] Disease;
        string[] Treatment;
        }

        mapping (address => patientData) public record;

        function getName(address _publicAddress) public view returns(string memory)
        {
            patientData storage pd = record[_publicAddress];
            return pd.name;
        }

        function getAge(address _publicAddress) public view returns(uint)
        {
            patientData storage pd = record[_publicAddress];
            return pd.age;
        }

        function getDisease(address _publicAddress) public view returns(string[] memory)
        {
            patientData storage pd = record[_publicAddress];
            return pd.Disease;
        }

        function getTreatment(address _publicAddress) public view returns(string[] memory)
        {
            patientData storage pd = record[_publicAddress];
            return pd.Treatment;
        }

        function addRecord(address _publicAddress, string memory _name, uint _age, string[] memory _disease, string[] memory _treatment) public {
            record[_publicAddress] = patientData(_publicAddress, _name, _age, _disease, _treatment);
        }

        function updateRecord(address _publicAddress, string memory _name, uint _age, string[] memory _disease, string[] memory _treatment) public {
            patientData storage pd = record[_publicAddress];
            pd.Disease = _disease;
            pd.Treatment = _treatment;
            pd.name = _name;
            pd.age = _age;
        }
}