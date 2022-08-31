import React, { useEffect } from "react";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import TableProducto from "../Components/TableProducto/TableProducto";
import { useProducto } from "../Hooks/useProducto";

const ProductoAdminPage = () =>{

    const {data, loading, error, indexProducto} = useProducto();

    useEffect(() => {
        indexProducto();
    }, [])

    if(loading){
        return <LoadingSpinner/>
    }

    return(
        <React.Fragment>
            {error && <div>Ocurrio un error</div>}
            {data && <TableProducto producto={data}/>}
        </React.Fragment>
    );
}

export default ProductoAdminPage