import Navbar from "./Navbar";
import { IoMdAddCircle } from "react-icons/io";
import Task from "./Task";

import React, { useState } from "react";

function TodoList({ tasks, input, setInput, addTask, deleteTask }) {
  const onchnage = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className=" max-lg:w-[70%] bg-gray-800 py-4 px-9 rounded-[30px] overflow-y-scroll">
      <Navbar />
      <h2 className="text-4xl bolder text-white pb-8">What&apos;s up, {input.name}!</h2>
      <div className="py-3 text-[#7d99e9]">Add the Data</div>
      <form className="flex flex-wrap space-x-2   justify-center">
        <input
          className="rounded-[10px] w-fit p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]"
          placeholder="Enter Name"
          // take input from the form here
          name="name"
          value={input.name}
          onChange={onchnage}
        />
        <input
          className="rounded-[10px] w-fit p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]"
          placeholder="Enter Age"
          // take input from the form here
          name="age"
          value={input.age}
          onChange={onchnage}
        />
        <input
          className="rounded-[10px] w-fit p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]"
          placeholder="Enter Disease"
          // take input from the form here
          value={input.Disease}
          name="Disease"
          onChange={onchnage}
        />
        <input
          className="rounded-[10px] w-fit p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]"
          placeholder="Enter Treatment"
          // take input from the form here
          value={input.Treatment}
          name="Treatment"
          onChange={onchnage}
        />
        <IoMdAddCircle
          // Add an onClick method
          onClick={addTask}
          className="text-[#ea0aff] text-[50px] cursor-pointer ml-[20px] mb-[10px]"
        />
      </form>
      <ul>
        {tasks.map((item) => (
          <Task
            key={item.id}
            tasks={item}
            //onclick delete task
            onClick={deleteTask(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
