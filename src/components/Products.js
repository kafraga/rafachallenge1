import React from "react";
import Product from "./Product";
import "./style.css";

export default function Products({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => {
        return <Product product={product}></Product>;
      })}
    </div>
  );
}
