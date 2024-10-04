import { useState } from "react";

export default function Counter({ counterName, children }) {
  console.log(children);

  const [count, setCount] = useState(0);
  const [name, setName] = useState(counterName);

  console.log("rendering");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        style={{ display: "inline-flex" }}
        onClick={() => {
          setName("Arpit Sharma");
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
        }}
      >
        Increase Count
      </button>
      {children}
    </div>
  );
}
