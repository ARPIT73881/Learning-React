import { createRoot } from "react-dom/client";

import "./style.css";

const root = createRoot(document.getElementById("root"));

// const h1 = <h1>Hello World</h1>;

// const card = (
//   <div className="card">
//     <img
//       src="https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcGxlJTIwaXBob25lfGVufDB8fDB8fHww"
//       alt="i phone image"
//     />
//     <div className="card-content">
//       <h3>I phone 16 pro</h3>
//       <p>Apple</p>
//       <p>
//         <b>$500</b>
//       </p>
//     </div>
//   </div>
// );

// const container = [card, card, card, card, card, card, card, card, card, card];

// function Card(key) {
//   return (
//     <div className="card" key={key}>
//       <img
//         src="https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcGxlJTIwaXBob25lfGVufDB8fDB8fHww"
//         alt="i phone image"
//       />
//       <div className="card-content">
//         <h3>I phone 16 pro</h3>
//         <p>Apple</p>
//         <p>
//           <b>$500</b>
//         </p>
//       </div>
//     </div>
//   );
// }

function Card(key, title, brand, images, price, desc) {
  return (
    <div className="card" key={key}>
      <img src={images} alt={desc} />
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

// const container = [
//   Card(1),
//   Card(2),
//   Card(3),
//   Card(4),
//   Card(5),
//   Card(6),
//   Card(7),
// ];

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const dataContainer = data.products.map((product) => {
      return Card(
        product.id,
        product.title,
        product.brand,
        product.thumbnail,
        product.price,
        product.description
      );
    });
    console.log(dataContainer);
    root.render(<div className="container">{dataContainer}</div>);
  });

// const container = <div className="container"></div>;

// root.render(card);
// root.render([card, card]);
// root.render(container);
