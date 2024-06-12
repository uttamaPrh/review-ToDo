import Link from "next/link";
import React from "react";
const header = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-blue-500 rounded-md py-10 px-2 ">
        <Link href="/" className=" font-semibold text-2xl text-white">
          To Do App
        </Link>
        <Link
          href="./create"
          className="bg-white shadow-md text-black rounded-md py-3 px-1"
        >
          Add New
        </Link>
      </div>
    </div>
  );
};

export default header;
