import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const NavBar = ({btnMenu}) => {
  return (
    <nav className={`NavBar ${btnMenu && "NavOn"}`}>
        <ul className='NavBar_ul'>
            <Link to="/" className='NavBar_a'>
                <li>Inicio</li>
            </Link>
            <Link to="/producto-admin" className='NavBar_a'>
                <li>Admin Productos</li>
            </Link>
        </ul>
    </nav>
  )
}

export default NavBar