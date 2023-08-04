import React from "react";
import Card from './Card';

export default function Product(props) {
  return (
    <div>
      <Card
        frontContent={<div className="card anime">
        <img className="product--image" src={props.url} alt="producto" />
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
      </div>}
        backContent={<div className="information">
          <h2 className="detailtitle">Nombre:</h2>
          <p>{props.name}</p>
          <h2 className="detailtitle">Precio:</h2>
          <p>{props.price}</p>
          {props.ingredients && <div>
            <h2 className="detailtitle">Ingredientes:</h2>
            <p>{props.ingredients}</p>
            <h2 className="detailtitle">Tamaño:</h2>
            <p>{props.size}</p>
            <h2 className="detailtitle">Sabor:</h2>
            <p>{props.flavour}</p>
          </div>
          }
        </div>}
      />
    </div>
  );
}