import React from "react"
import ItemCount from "./ItemCount"
import './itemlistcontainer.css'


const itemlistcontainer = () => {
    return (
        <>
        <p className="textoejemplo">PausaMarket</p>

        <ItemCount stock={5} />
        </>
    )

}

export default itemlistcontainer