import React from "react";
import { ListaProductos } from "../Components/ListaProductos/ListaProductos";
import { useProducto } from "../Hooks/useProducto";

const Home = () =>{

    const { productos } = useProducto();

    return(
        <div className="home_container">
            <div className="home_info">

            </div>
            <hr/>
            <ListaProductos productos={productos}/>
        </div>
    );
}

export default Home;