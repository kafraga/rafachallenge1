import React from "react";
import CartButtons from "./CartButtons";
import "./style.css";

export default function Product({ product }) {
  return (
    <div className="info-product-container">
      <div className="info-product">
        <img src={product.img}></img>
        <p className="product-name">{product.name}</p>
        <p className="product-stock">{product.stock}</p>
        <p className="product-price">{product.price}</p>
        <p className="info-sale">{product.sale}</p>
        <p className="product-details">
          <a href="teste">View Details</a>
        </p>
      </div>
      <CartButtons></CartButtons>
    </div>
  );
}
