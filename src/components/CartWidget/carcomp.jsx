import React from 'react';
import carrito from '../../assets/carrito.svg';
import '../CartWidget/carcomp.css'


const carcomp = () => {
    return(
        <div>
                <img className="carrito" src={carrito} alt="carrito" />
            </div>
    )
}


export default carcomp