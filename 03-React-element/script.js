//h2 created using React.createElement()
// const h2 = React.createElement("h2", { className: "heading-2" }, "Hello React");

//h2 created using object
const h2 = {
  $$typeof: Symbol.for("react.element"),
  type: "h2",
  key: null,
  ref: null,
  props: {
    className: "heading-2",
    children: "Hello React",
  },
  _owner: null,
  _store: {},
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(h2);

//normal h3 element created using document.createElement()
const h3 = document.createElement("h3");
h3.classList.add("heading-3");
h3.innerText = "Hello Js";
document.body.append(h3);

// document.querySelector("#root").append(h3);
// const h3 = document.createElement("h3");
// h3.classList.add("heading-3");
// h3.innerText = "Hello Js";
// document.querySelector("#root").append(h3);
