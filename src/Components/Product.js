/*
This component define a product
A product is caracterised by : 
Name 
Price 
Quantity
*/
import React from "react";

const Product = props => (
  <div>
    <h2>
      {props.title} - {props.price} x {props.quantity}
    </h2>
  </div>
);

export default Product;
