import React from "react";

const AppleBasket = ({ appleCount, basketName }) => {
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span> apples
      </h1>
      <p>
        {basketName}
        {appleCount === 10 && " (full) "}
        {appleCount === 0 && " (empty) "}
        {/* {appleCount === 10 ? " (full) " : ""} */}
        {/* {appleCount === 0 ? " (empty) " : ""} */}
      </p>
    </div>
  );
};

export default AppleBasket;
