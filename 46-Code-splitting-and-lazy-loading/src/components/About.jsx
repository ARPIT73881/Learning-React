import React, { useState } from "react";
import { todos } from "./data";

export default function About() {
  const [todosList, setTodosList] = useState([]);
  return (
    <>
      <h1 className="text-xl">We are ProCodrrs</h1>
      {/* importing data when required or requested by the user */}
      <button
        className="cursor-pointer rounded border border-gray-300 bg-gray-100 px-2 py-1 text-black"
        onClick={() => {
          import("./data").then((module) => setTodosList(module.todos));
        }}
      >
        {" "}
        Load Data
      </button>
      <ul className="p-3">
        {todosList.map((el) => (
          <li className="list-disc" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    </>
  );
}
