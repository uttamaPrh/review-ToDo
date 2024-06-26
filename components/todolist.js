import React from "react";
import { useRouter } from "next/router";
const Todolist = ({title, desc}) => {
  const router = useRouter();
  const {
    query: { title, desc },
  } = router;
  const myTodo = { title, desc };
  return (
    <div className="flex flex-col gap-6 mt-4 border border-red-300 p-4">
      <div className=" flex flex-col gap-6">
        <div className="text-2xl font-semibold ">{myTodo.title} </div>
        <div className="text-xl ">
         {myTodo.desc}
        </div>
      </div>
      {/* buttons */}
      <div className=" flex items-center justify-end gap-4">
        <div className="bg-green-500 text-white font-xl rounded py-2 px-4 cursor-pointer">Edit</div>
        <div  className="bg-red-500 text-white font-xl rounded px-4 py-2  cursor-pointer">Delete</div>
      </div>
    </div>
  );
};

export default Todolist;
