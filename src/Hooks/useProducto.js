import {useState, useEffect} from "react";
import { traerProductos, crearProducto, showProducto } from "../Api/ProductoApi";

const useProducto = () =>{

    const [productValue, setProductValue] = useState({
        data: undefined,
        loading: false,
        error: undefined,
    });

    const indexProducto = () => {
        setProductValue({
            data: undefined,
            loading: true,
            error: undefined,
        });
        traerProductos()
        .then(response => {
            setProductValue({
                data: response.data,
                loading: false,
                error: undefined
            });
        })
        .catch(error => {
            setProductValue({
                data: undefined,
                loading: false,
                error: error.message
            })
        })
    }

    const storeProducto = ({data}) =>{
        setProductValue({
            data: undefined,
            loading: true,
            error: undefined
        })
        crearProducto({data})
        .then(response => {
            setProductValue({
                data: response.data,
                loading: false,
                error: undefined
            })
        })
        .catch(error => {
            setProductValue({
                data: undefined,
                loading: false,
                error: error.message
            })
        })
    }

    const mostrarProducto = ({id}) =>{
        setProductValue({
            data: undefined,
            loading: true,
            error: undefined,
        });
        showProducto({id})
        .then(response => {
            setProductValue({
                data: response.data,
                loading: false,
                error: undefined,
            });
        })
        .catch(error => {
            setProductValue({
                data: undefined,
                loading: false,
                error: error.message,
            });
        })
    }

    return {
        ...productValue,
        indexProducto,
        storeProducto,
        mostrarProducto,
    }
}

export { useProducto }