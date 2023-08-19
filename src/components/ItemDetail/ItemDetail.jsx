import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({producto}) => {
  const[quantityAdded, setQuantityAdded]= useState('')
  const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQuantityAdded(cantidad)
        addItem(producto, cantidad)

      }


  return (
    <div className='container d-flex flex-column align-items-center m-2 p-2 border border-1 border-dark'>
        <h4>te intereso: {producto.name} </h4>
        <h6>{producto.description}</h6>
        <p>PRECIO $ {producto.price}</p>
        <img src= {producto.img} className="img-fluid" alt=""/>
        {quantityAdded === '' ? <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
        : <Link to="/cart" className='btn btn-dark'>ir al carrito</Link>}

    </div>
  )
}

export default ItemDetail