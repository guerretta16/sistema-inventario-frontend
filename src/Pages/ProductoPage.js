import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducto } from "../Hooks/useProducto";
import CarouselView from "../Components/CarouselView/CarouselView";
import InfoProducto from "../Components/InfoProducto/InfoProducto";
import '../css/ProductoPage.css';
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const ProductoPage = () => {
  const { id } = useParams();
  const { data, loading, error, mostrarProducto } = useProducto();

  useEffect(() => {
    mostrarProducto({id});
  }, [])
  
  if(loading){
    return <LoadingSpinner />
  }

  return (
    <div className="ProductoPage-container">
        {error && <span>Ocurrio un error</span>}
        {data && <CarouselView images={data.image} filenames={data.filename}/>}
        {data && <InfoProducto producto={data}/>}
    </div>
  );
};

export default ProductoPage;
