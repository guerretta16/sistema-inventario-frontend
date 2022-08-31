import axios from 'axios';
import { ENDPOINT } from '../Utils/endPoint';

const traerCategorias = () => {
    return (
        axios.get(`${ENDPOINT}/categoria`)
    );
}

export {traerCategorias}