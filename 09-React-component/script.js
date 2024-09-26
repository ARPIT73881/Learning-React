import { createRoot } from "react-dom/client";

import "./style.css";
import React from "react";

const root = createRoot(document.getElementById("root"));

function Card(props) {
  const { key, title, brand, image, price, description } = props;
  // console.log(cardDetails);
  return (
    <div className="card" key={key}>
      <img src={image} alt={description} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const dataContainer = data.products.map((product) => {
      return Card({
        key: product.id,
        image: product.thumbnail,
        title: product.title,
        brand: product.brand,
        price: product.price,
        description: product.description,
      });
    });
    console.log(dataContainer);
    root.render(<div className="container">{dataContainer}</div>);
  });

// function Heading() {
//   return <h1>Hello function {}</h1>;
// }

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Heading,
//   key: null,
//   ref: null,
// });

// ========================React Component =======================
// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,
//   key: null,
//   ref: null,
//   props: {
//     key: 1,
//     title: "apple",
//     brand: "no brand",
//     price: 1200,
//     description: "kuch bhi",
//   },
// });

root.render(
  React.createElement(Card, {
    title: "I phone 12",
    brand: "Apple",
    price: 500,
    description: "image of apple iphone 12",
    image:
      "https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG?tr=h-630,c-at_max,q-80",
  })
);
