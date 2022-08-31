import React from 'react'
import './style.css'

const TableProducto = ({producto}) => {

  return (
    <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>IMG</th>
                <th>OPT</th>
            </tr>
        </thead>
        <tbody>
            {
                producto.map((prod, index) => (
                    <tr key={index}>
                        <td>{prod.id}</td>
                        <td>{prod.nombre_prod}</td>
                        <td>
                            <img className='table-img' src={`http://localhost:8000${JSON.parse(prod.image)[0]}`}/>
                        </td>
                        <td className='btn-flex'>
                            <button className='btn btn-edit'>Editar</button>
                            <button className='btn btn-del'>Eliminar</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default TableProducto