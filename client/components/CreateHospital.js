import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setpatientdata } from "../store/slices/userStore";
import { contract2 } from "../confing";
import Register from "../../backend/build/contracts/register.json";
import { ethers } from "ethers";
