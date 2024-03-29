import React from "react";
import { CardProducto } from "../CardProducto/CardProducto";
import "./style.css";

export const ListaProductos = ({ productos }) => {
  function showProductos() {
    return productos !== undefined
      ? productos.map((producto, index) => (
          <CardProducto key={index} producto={producto} />
        ))
      : ""
  }

  return <div className="List_container">{showProductos()}</div>;
};
