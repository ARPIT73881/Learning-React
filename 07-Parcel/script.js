import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

import { userData } from "./data.js";

console.log("Hello Parcel");

console.log(userData);

console.log(React);

const root = ReactDOM.createRoot(document.querySelector("#root"));

const h2 = <h2>Hello Parcel with react</h2>;
root.render(h2);
