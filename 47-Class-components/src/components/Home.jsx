import React from "react";
import Counter from "./Counter";
import ClassCounter from "./ClassCounter";

export default function Home() {
  return (
    <>
      <h1 className="text-xl">Welcome to Our Home</h1>
      <Counter />
      <hr className="my-4" />
      <ClassCounter name="Old Method" />
    </>
  );
}
