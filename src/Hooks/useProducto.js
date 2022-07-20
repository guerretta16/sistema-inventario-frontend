import React, {useState, useEffect} from "react";
import { traerProductos } from "../Api/ProductoApi";

const useProducto = () =>{

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorLog, setErrorLog] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [messageResponse, setMessageResponse] = useState('');

    useEffect(() => {
        setLoading(true);
        setErrorLog(false);
        traerProductos()
        .then(res => {
            if(res.status === 500){
                setErrorLog(true);
                setLoading(false);
                setMessageResponse('No se tiene permiso');
            }
            else{
                setErrorLog(false);
                setLoading(false);
               setProductos(res.data);
            }
        })
    }, [saveSuccess])

    return {
        productos,
        loading,
        errorLog,
        messageResponse
    }
}

export { useProducto }