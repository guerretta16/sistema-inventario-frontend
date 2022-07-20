import axios from 'axios';
import { ENDPOINT } from '../Utils/endPoint';

const traerProductos = () => {
    return (
        axios.get(`${ENDPOINT}/producto`)
    );
}

export { traerProductos }