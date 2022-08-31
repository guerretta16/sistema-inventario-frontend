import React, { useEffect } from "react";
import { ListaProductos } from "../Components/ListaProductos/ListaProductos";
import { useProducto } from "../Hooks/useProducto";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";


const Home = () =>{

    const { data, loading, error, indexProducto} = useProducto();

    useEffect(() => {
        indexProducto();
    }, [])

    if(loading){
        return <LoadingSpinner />
    }

    return(
        <div className="home_container">
            <div className="home_info">

            </div>
            <hr/>
            <ListaProductos productos={data}/>
        </div>
    );
}

export default Home;