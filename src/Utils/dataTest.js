import image1 from '../assets/img/nike-airforce1.png';
import image2 from '../assets/img/cinturon-gucci.png';
import image3 from '../assets/img/balon-nike.png';

export const productosTest = [
    {
        id: 1,
        categoria: {
            id: 1,
            nombre: "Zapatos"
        },
        codigo_prod: 10000000,
        nombre_prod: "Nike Air Force 1",
        descripcion_prod: "Zapatos Nike replica, color blanco",
        precio: 65.00,
        stock: 15,
        image: image1
    },
    {
        id: 2,
        categoria: {
            id: 2,
            nombre: "Accesorios"
        },
        codigo_prod: 10000001,
        nombre_prod: "Cinturon Gucci",
        descripcion_prod: "Cinturón Gucci Hebilla De Louis Vuitton Correa",
        precio: 40.00,
        stock: 5,
        image: image2
    },
    {
        id: 3,
        categoria: {
            id: 3,
            nombre: "Deportes"
        },
        codigo_prod: 10000002,
        nombre_prod: "Balón Nike",
        descripcion_prod: "Balón de fútbol Nike Mercurial Vapor",
        precio: 20.00,
        stock: 8,
        image: image3
    },
    
    
]