import React from "react";




export const ItemList = ({ productos }) => {
    return (
    <>
        {productos.map((productos)=>{
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
