import React from "react";
import ProductToAdd from "./ProductToAdd";

const ProductList = props =>
  props.productList.map(product => (
    <ProductToAdd
      title={product.title}
      price={product.price}
      quantity={product.quantity}
    />
  ));

export default ProductList;
