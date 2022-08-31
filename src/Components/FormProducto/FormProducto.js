import React, { useState } from "react";
import "./style.css";

const FormProducto = ({ loading, errorLog, storeProducto, categorias, messageResponse }) => {

  const randomHex = (numBytes) => {
    const bytes = crypto.getRandomValues(new Uint8Array(numBytes));
    const array = Array.from(bytes);
    const hexPairs = array.map((b) => b.toString(16).padStart(2, "0"));
    return hexPairs.join("");
  };

  const [codeValue, setCodeValue] = useState(randomHex(4))

  const [formValue, setFormValue] = useState({
    categoria: null,
    nombre_producto: null,
    descripcion_producto: null,
    precio: null,
    cantidad: null,
    codigo: codeValue,
    files: []
  })

  const handleChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeFiles = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: Array.from(e.target.files)
    })
  }

  const handleSubmit = () => {
    const data = new FormData();
    data.append("idCategoria", formValue.categoria);
    data.append("nombre_prod", formValue.nombre_producto);
    data.append("descripcion_prod", formValue.descripcion_producto);
    data.append("precio", formValue.precio);
    data.append("stock", formValue.cantidad);
    data.append("codigo_prod", formValue.codigo);
    formValue.files.map(file => {
      data.append("image[]", file);
    })
    storeProducto({data})
    alert(messageResponse);
  }

  const onlyNumbers = (e) => {
    const code = e.wich ? e.wich : e.keyCode;
    console.log(code);
  }; 

  const showCategorias = (cat) =>
    cat.map((item, index) => (
      <option key={index} value={item.id}>
        {item.nombre_cat}
      </option>
    ));

  return (
    <form
      className="Form_products"
      encType="multipart/form-data"
    >
      <div className="form-group">
        <input
          type="text"
          name="nombre_producto"
          className="form-input"
          placeholder="Nombre del producto"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-input form-input-area"
          placeholder="Descripción del producto"
          name="descripcion_producto"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Precio $0.00"
          className="form-input"
          name="precio"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Cantidad 0"
          className="form-input"
          name="cantidad"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-input"
          name="codigo"
          value={codeValue}
          disabled
        />
      </div>
      <div className="form-group">
        <select
          className="form-input form-select"
          name="categoria"
          onChange={handleChange}
        >
          <option value="0">Elegir categoría</option>
          {showCategorias(categorias)}
        </select>
      </div>
      <div className="form-group">
        <input
          type="file"
          className="form-file"
          name="files"
          accept=".png, .jpg"
          multiple
          onChange={handleChangeFiles}
        />
      </div>
      <input
        type="button"
        className="form-btn"
        value={loading ? "Cargando..." : "Enviar"}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default FormProducto;
