import React from "react";




export const Item = ({ hierbas }) => {
    return <>
    <h2 key={hierbas.id} className="nombre">
            {hierbas.name}</h2>
            <h2 key={hierbas.id} className="price">
            {hierbas.price}</h2>
            </>
}

export default Item

