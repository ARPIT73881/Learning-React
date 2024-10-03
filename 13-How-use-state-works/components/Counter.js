import { useState } from "react";

export default function Counter() {
  // const states = [0];
  const [count, setCount] = useState(0);

  console.log("rendering");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // setCount(count + 1);
          //to increase the value multiple times we can use previous state method
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
