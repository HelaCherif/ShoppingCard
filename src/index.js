import React from "react";
import { render } from "react-dom";
import ProductPage from "./Pages/ProductPage";
import CardProductList from "./Components/CardProductList";

let productList = [
  {
    title: "Hello",
    price: "200",
    quantity: 2
  },
  {
    title: "world",
    price: "100",
    quantity: 1
  },
  {
    title: "Test",
    price: "220",
    quantity: 5
  }
];
const App = () => (
  <div>
    <CardProductList cardproductList={productList} />
  </div>
);

render(<App />, document.getElementById("root"));
