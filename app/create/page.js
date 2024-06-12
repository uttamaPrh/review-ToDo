"use client";
import React, { useState } from "react";
import Pagess from "./page";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
  function setTodo() {
    const newTodo ={title, desc};
    setTodos([...todos,newTodo])
    console.log(newTodo)
    setTitle("");
    setDesc("");
  }
  return (
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
      {
        todos.map((todo,index) =>{
          <Pagess title={todo.title} desc={todo.desc} key={index}/>
        })
      }
    </div>
  );
};

export default Page;
