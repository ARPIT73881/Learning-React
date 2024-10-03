//Declarative Programming

import Button from "./Button";

import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";

import "./AppleCounter.css";
import { useState } from "react";
// import { useState, Fragment } from "react";

// console.log(Fragment);
// console.log(<Fragment></Fragment>);

const AppleCounter = () => {
  const totalAppleCount = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  );
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
    }
  };

  // const frag = (
  //   <Fragment>
  //     <h1>React Fragment</h1>
  //     <section>
  //       <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
  //       <Button
  //         clickHandler={leftClickHandler}
  //         imageUrl={LeftArrow}
  //         buttonName="Left Arrow"
  //       />
  //       <Button
  //         clickHandler={rightClickHandler}
  //         imageUrl={RightArrow}
  //         buttonName="Right Arrow"
  //       />
  //       <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
  //     </section>
  //   </Fragment>
  // );

  // console.log(frag);

  // return frag;

  return (
    <>
      <h1>React Fragment</h1>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow}
          buttonName="Left Arrow"
        />
        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow}
          buttonName="Right Arrow"
        />
        <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
      </section>
    </>
  );
};

export default AppleCounter;
