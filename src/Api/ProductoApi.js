import axios from 'axios';
import { ENDPOINT } from '../Utils/endPoint';

const traerProductos = () => {
    return (
        axios.get(`${ENDPOINT}/producto`)
    );
}

const showProducto = ({id}) => {
    return (
        axios.get(`${ENDPOINT}/producto/${id}`)
    );
}

const crearProducto = ({data}) => {
    const configuration = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }
    return(
        axios.post(`${ENDPOINT}/producto`, data, configuration)
    );
}

export { traerProductos, crearProducto, showProducto }