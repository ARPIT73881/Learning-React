import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="m-4 text-center font-bold">Counter</h1>
      <div className="flex flex-col items-center">
        <h2 className=" font-bold ">{count}</h2>
        <button
          className="cursor-pointer rounded border border-gray-300 bg-gray-100 px-2 py-1 font-bold text-black"
          onClick={() => setCount(count + 1)}
        >
          Click
        </button>
      </div>
    </>
  );
}
