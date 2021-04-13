import React from "react";
import "./style.css";

export default function CartButtons() {
  return (
    <div className="button-container">
      <button className="cart-button">-</button>
      <input type="text" className="input-cart" defaultValue="0"></input>
      <button className="cart-button">+</button>
      <button className="add-button">Add</button>
    </div>
  );
}
