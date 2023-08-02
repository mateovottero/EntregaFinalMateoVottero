import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        alert(`compraste ${cantidad} items`);
      }
  return (
    <div className='container d-flex flex-column align-items-center m-2 p-2 border border-1 border-dark'>
        <h4>Compraste el producto: {producto.name} </h4>
        <h6>{producto.description}</h6>
        <p>PRECIO $ {producto.price}</p>
        <img src= {producto.img} className="img-fluid" alt=""/>
        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail