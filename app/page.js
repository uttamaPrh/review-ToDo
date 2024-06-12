"use client";
import React, { useState } from "react";
const Todolist = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
 function setTodo() {
    if (title.trim() === "" || desc.trim() === "") {
      alert("Title and description cannot be empty");
      return;
    }
    const newTitle = title;
    const newDesc = desc;
    const newTodo = { title: newTitle, desc: newDesc };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDesc("");
  }
  return (
    <>
      {/* input starts  */}

      <div className="flex flex-col gap-6 mt-6">
        <div className="font-bold text-3xl text-black">Create ToDo</div>
        <input
          type="text"
          className="py-4 outline-1 border rounded px-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows={4}
          name="description"
          placeholder="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="py-1 px-4  resize-none border rounded outline-1"
        ></textarea>
        <button
          onClick={setTodo}
          className=" bg-black text-white px-4 py-4 rounded-md cursor-pointer "
        >
          Add ToDo
        </button>
      </div>

      {/* input ends  */}

      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex flex-col gap-6 mt-4 border border-red-300 p-4"
        >
          <div className=" flex flex-col gap-6">
            <div className="text-2xl font-semibold ">{todo.title} </div>
            <div className="text-xl ">{todo.desc}</div>
          </div>
          <div className=" flex items-center justify-end gap-4">
            <div className="bg-green-500 text-white font-xl rounded py-2 px-4 cursor-pointer">
              Edit
            </div>
            <div className="bg-red-500 text-white font-xl rounded px-4 py-2  cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      ))}
      {/* buttons */}
    </>
  );
};

export default Todolist;
