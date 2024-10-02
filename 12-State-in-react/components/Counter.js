import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //   const count = myStateArray[0];
  //   const setCount = myStateArray[1];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
}

// function Counter() {
//   const myStateArray = useState(0);
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Counter</h1>
//       <h2>{myStateArray[0]}</h2>
//       <button
//         onClick={() => {
//           myStateArray[1](myStateArray[0] + 1);
//         }}
//       >
//         Increase Count
//       </button>
//     </div>
//   );
// }

export default Counter;
