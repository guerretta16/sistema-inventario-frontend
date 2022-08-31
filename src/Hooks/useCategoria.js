import {useState, useEffect} from "react";
import { traerCategorias } from "../Api/CategoriaApi";

const useCategoria = () =>{

    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorLog, setErrorLog] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [messageResponse, setMessageResponse] = useState('');

    useEffect(() => {
        setLoading(true);
        setErrorLog(false);
        traerCategorias()
        .then(res => {
            if(res.status === 500){
                setErrorLog(true);
                setLoading(false);
                setMessageResponse('No se tiene permiso');
            }
            else{
                setErrorLog(false);
                setLoading(false);
                setCategorias(res.data);
            }
        })
        .catch(error => setMessageResponse(error.message))
    }, [saveSuccess])

    return {
        categorias,
        loading,
        errorLog,
        saveSuccess,
        messageResponse
    }
}

export { useCategoria }