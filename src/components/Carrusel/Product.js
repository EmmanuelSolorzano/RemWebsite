import React from "react";

export default function Product(props) {
  return (
    <div className="card anime">
      <img className="product--image" src={props.url} alt="producto" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
    </div>
  );
}