export const contract1 = "0xe0F73402180DEd12A329b2b976f396192a78342A";
export const contract2 = "0x794416F3719acC2309597938BB01c1bA0BB8B7f2";

// import { ethers } from "ethers";

// import Register from "../Backend/build/contracts/register.json";
// import Records from "../Backend/build/contracts/records.json";

// export const contract = ({ ethereum, Address, Abi }) => {
//   var contract, Abi;
//   if (Address == 1) {
//     contract = contract1;
//   } else if (Address == 2) {
//     contract = contract2;
//   }

//   if (Abi == 1) {
//     Abi = Records;
//   } else if (Abi == 2) {
//     Abi = Register;
//   }
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();
//   const Contract = new ethers.Contract(contract, Abi.abi, signer);
//   return Contract;
// };
