'use client';

import React from 'react'
import { useRouter } from "next/router";
const page = () => {
      const router = useRouter();
      const {
        query: { title, desc },
      } = router;
      const myTodo = { title, desc };
  return (
    <>
      <div>{myTodo.title} </div>
      <div>{myTodo.desc} </div>
    </>
  );
}

export default page