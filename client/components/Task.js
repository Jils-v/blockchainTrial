import { BsFillTrashFill } from "react-icons/bs";

const Task = ({ tasks, onClick }) => {
  return (
    <div className="flex items-center text-white">
      <div className=" bg-[#031956] text-[#b6c7db] flex w-[70%] rounded-[15px] mb-[10px] flex-1">
        <div className="flex items-center justify-between w-full p-[20px] text-xl">
          {/* {" name: " +
            tasks.name +
            "   age: " +
            tasks.age +
            "   Disease: " +
            [tasks.Disease] +
            "  Treatment: " +
            [tasks.Treatment]} */}
          <p>name : {tasks.name}</p>
          <p>age : {tasks.age}</p>
          <p>Disease : {tasks.Disease}</p>
          <p>Treatment : {tasks.Treatment}</p>
        </div>
      </div>
      <BsFillTrashFill onClick={onClick} className="text-2xl cursor-pointer ml-10" />
    </div>
  );
};

export default Task;
