import { useState } from "react";

import styles from "./Counter.module.css";
//if the css file is module then we cannot import it like this
// import "./Counter.module.css";

export default function Counter({ counterName, children }) {
  const [count, setCount] = useState(0);
  console.log(children);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={styles.text}>{count}</h1>
      {/* <h1 className={styles["text-xl"]}>{count}</h1> */}
      <button
        // className="btn"
        className={[styles.btn, styles.text].join(" ")}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      {children}
    </div>
  );
}
