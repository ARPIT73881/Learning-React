import Button from "./Button";
import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";

import "./AppleCounter.css";

const AppleCounter = () => {
  return (
    <>
      <h1 className="heading">React Counter </h1>
      <section className="section">
        <AppleBasket appleCount={10} basketName="Basket 1"></AppleBasket>
        <Button imageUrl={leftArrow} title="left arrow "></Button>
        <Button imageUrl={rightArrow} title="right arrow"></Button>
        <AppleBasket appleCount={0} basketName="Basket 2"></AppleBasket>
      </section>
    </>
  );
};

export default AppleCounter;
