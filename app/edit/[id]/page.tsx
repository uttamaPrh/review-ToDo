import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="font-bold text-3xl text-black">Edit ToDo</div>

      <input
        type="text"
        className="py-4 outline-1 border rounded px-2"
        placeholder="Title"
      />

      <textarea
        rows={4}
        name="description"
        placeholder="description"
        className="py-1 px-4 rounded resize-none border rounded outline-1"
      ></textarea>
      <button className=" bg-black text-white px-4 py-2 rounded-md cursor-pointer ">
        Edit ToDo
      </button>
    </div>
  );
}

export default page