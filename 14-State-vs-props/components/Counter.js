import { useState } from "react";

const states = [1, "Arpit"];

export default function Counter({ counterName }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Arpit");

  console.log("rendering");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{counterName}</h1>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName("Arpit Sharma");
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
}
