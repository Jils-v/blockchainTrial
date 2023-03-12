import WrongNetworkMessage from "../components/WrongNetworkMessage";
import ConnectWalletButton from "../components/ConnectWalletButton";
import TodoList from "../components/TodoList";
import { TaskContractAddress } from "../confing";
import TaskAbi from "../../backend/build/contracts/records.json";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setuser } from "../store/slices/userStore";
import Connect from "../components/Connect";
import CreateAccount from "../components/CreateAccount";
import User from "./page/User";
import Doctor from "./page/Doctor";

export default function Home() {
  const [input, setInput] = useState({
    name: "yash",
    age: 22,
    Disease: "no",
    Treatment: "no",
  });
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.slice;
  });
  console.log(data);

  const getAllTasks = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        console.log(ethereum);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(TaskContractAddress, TaskAbi.abi, signer);
        let allTasks = await TaskContract.getMyTasks();
        console.log(allTasks);
        setTasks(allTasks);
      } else {
        console.log("Ethereum Object does not exists");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Add tasks from front-end onto the blockchain
  const addTask = async (e) => {
    e.preventDefault(); //avoid refresh

    var task = {
      publicAddress: currentAccount,
      name: input.name,
      age: input.age,
      Disease: [input.Disease],
      Treatment: [input.Treatment],
    };

    try {
      const { ethereum } = window;
      if (ethereum) {
        console.log(ethereum);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(TaskContractAddress, TaskAbi.abi, signer);
        TaskContract.addRecord(
          task.publicAddress,
          task.name,
          task.age,
          task.Disease,
          task.Treatment
        )
          .then((res) => {
            console.log("res", res);
            setTasks([...tasks, task]);
            console.log("Added Task");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("Ethereum Object does not exists");
      }
    } catch (error) {
      console.log(error);
    }
    // setInput(""); this is comment for now
  };

  // Remove tasks from front-end by filtering it out on our "back-end" / blockchain smart contract
  const deleteTask = (key) => async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(TaskContractAddress, TaskAbi.abi, signer);
        const deletTaskTx = await TaskContract.deleteTask(key, true);
        console.log("successfully deleted", deletTaskTx);
        let allTasks = await TaskContract.getMyTasks();
        setTasks(allTasks);
      } else {
        console.log("Ethereum Object does not exists");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-hidden ">
      {!data.isConnected ? (
        <Connect />
      ) : data.isUserFound ? (
        data.usertype == "patient" ? (
          <User />
        ) : data.usertype == "doctor" ? (
          <Doctor />
        ) : data.usertype == "admin" ? (
          <TodoList
            tasks={tasks}
            input={input}
            setInput={setInput}
            addTask={addTask}
            deleteTask={deleteTask}
          />
        ) : data.usertype == "" ? (
          <CreateAccount />
        ) : (
          []
        )
      ) : (
        <CreateAccount />
      )}
    </div>
  );
}
