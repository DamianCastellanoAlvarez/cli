import React, { useEffect, useState } from 'react'
import './itemlistcontainer.css'
import Item from './Item'

const itemlistcontainer = ({productos}) => {
    return (
        <>
        <p className="textoejemplo">{prop.greeting}</p>
        </>
    )
}



export const ItemList = () => {


    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(Item);
        }, 3000);
    });
    
    
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
        setLoading(false);
        setProductos(response);
        });
    }, []);
    
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        promesa.then(res => {
            setProductos(res);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    
    
    return (
        <>
            <h2 key={productos.id} className="nombre">
            {productos.name}</h2>
            <h2 key={productos.id} className="price">
            {productos.price}</h2>
            
        </>
    )
    }


export default itemlistcontainer