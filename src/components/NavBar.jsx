import React from "react"
import './NavBar.css'
import logo from '../assets/Logo.png'
import carrito from '../assets/carrito.svg'


const NavBar = () =>{
    return (
        <>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <img className="carrito" src={carrito} alt="carito" />
            </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="./productos.html">productos</a>
                        </li>
                        <li>
                            <a href="./blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="./contactos.html">Contacto</a>
                        </li>
                    </ul>
                </nav>
        </>
    )
}

export default NavBar