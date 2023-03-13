export const contract1 = "0xD8A9Dc093CaC956aCA79369e7eb676A122220D9c";
export const contract2 = "0x5F4061BE5B8C5b2FECcCF82c7846ca2C40dda826";

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
