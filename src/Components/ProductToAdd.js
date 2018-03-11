/*
A Product to add is caracterised by : 
  * A Product 
  * A Button called "add to cart"
*/

import React from "react";
import Product from "./Product";

const ProductToAdd = props => (
  <div>
    <Product
      title={props.title}
      price={props.price}
      quantity={props.quantity}
    />
    <button> Add To chart </button>
  </div>
);
export default ProductToAdd;
