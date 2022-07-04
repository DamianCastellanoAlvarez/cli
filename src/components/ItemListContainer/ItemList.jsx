import React, { useEffect, useState } from 'react'
import Item from '../ItemListContainer/Item'



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
    setHierbas(response);
    });
}, []);

const [hierbas, setHierbas] = useState([]);

useEffect(() => {
    promesa.then(res => {
        setHierbas(res);
    }).catch(err => {
        console.log(err);
    });
}, []);


return (
    <>
        {hierbas.map((hierbas)=>{
            if (loading) {
                return (
                <>
                    <h1 className='carga'>Cargando...</h1>
                </>
                );
            }
        })}
    </>
)
}

export default ItemList
