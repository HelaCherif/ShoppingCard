import React from "react";
import Product from "./Product";
const CardProductList = props => [
  props.cardproductList.map(product => (
    <Product
      title={product.title}
      price={product.price}
      quantity={product.quantity}
    />
  )),
  <h2> Total : {props.total}</h2>,
  <button> Clear</button>
];

export default CardProductList;
