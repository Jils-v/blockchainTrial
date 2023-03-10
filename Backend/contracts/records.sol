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
        string[] Disease;
        string[] Treatment;
        string[] TreatmentYear;
        }

        mapping (address => patientData) record;

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

        function getTreatmentYear(address _publicAddress) public view returns(string[] memory)
        {
            patientData storage pd = record[_publicAddress];
            return pd.TreatmentYear;
        }

        function addRecord(address _publicAddress, string[] memory _disease, string[] memory _treatment, string[] memory _treatmentYear) public {
            record[_publicAddress] = patientData(_disease, _treatment, _treatmentYear);
        }

        function updateRecord(address _publicAddress, string[] memory _disease, string[] memory _treatment, string[] memory _treatmentYear) public {
            patientData storage pd = record[_publicAddress];
            pd.Disease = _disease;
            pd.Treatment = _treatment;
            pd.TreatmentYear = _treatmentYear;
        }
}