import Button from "./Button";
import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";

import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

import "./AppleCounter.css";

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

const AppleCounter = () => {
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      leftAppleCount++;
      rightAppleCount--;
    }
    console.log(`left = ${leftAppleCount} || right = ${rightAppleCount}`);
    root.render(<AppleCounter></AppleCounter>);
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      rightAppleCount++;
      leftAppleCount--;
    }
    console.log(`left = ${leftAppleCount} || right = ${rightAppleCount}`);
    root.render(<AppleCounter></AppleCounter>);
  };
  return (
    <>
      <h1 className="heading">React Counter </h1>
      <section className="section">
        <AppleBasket
          appleCount={leftAppleCount}
          basketName="Basket 1"
        ></AppleBasket>
        <Button
          imageUrl={leftArrow}
          title="left arrow "
          clickHandler={leftClickHandler}
        ></Button>
        <Button
          imageUrl={rightArrow}
          title="right arrow"
          clickHandler={rightClickHandler}
        ></Button>
        <AppleBasket
          appleCount={rightAppleCount}
          basketName="Basket 2"
        ></AppleBasket>
      </section>
      <p style={{ textAlign: "center", marginTop: "24px" }}>
        <button
          style={{ cursor: "pointer", padding: "8px" }}
          onClick={() => {
            root.render(<AppleCounter></AppleCounter>);
          }}
        >
          Re-Render
        </button>
      </p>
    </>
  );
};

export default AppleCounter;
