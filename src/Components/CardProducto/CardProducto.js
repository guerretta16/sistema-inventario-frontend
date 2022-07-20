import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const CardProducto = ({ producto }) => {

  const [fileImg, setFileImg] = React.useState(JSON.parse(producto.image));

  return (
    <Link to={`/producto/${producto.id}`} className="card_container">
      {<img src={`http://localhost:8000${fileImg[0]}`} className="card_img" />}
      <div className="card_info">
        <h4 className="card_name">{producto.nombre_prod}</h4>
        <hr/><br/>
        <h6 className="card_category">
          Categoria: {producto.idCategoria}
        </h6>
        <div className="card_description">
          <p className="card_text">
            <b>Disponibles:</b> {producto.stock}
          </p>
          <p className="card_text price">
            <b>Precio:</b> ${producto.precio}
          </p>
        </div>
      </div>
    </Link>
  );
};
