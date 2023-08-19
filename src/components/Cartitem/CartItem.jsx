import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({item}) => {
    const {deleteItem}= useContext(CartContext)
  return (
    <div className='d-flex justify-content-arround aline-item-center'>
        <img src={item.img} alt='item.name' width={'180rem'}/>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>cantidad: {item.quantity}</p>
        <p>sub total : ${item.quantity * item.price}</p>
        <button className='btn btn-danger' onClick={()=> deleteItem(item.id)}> X </button>
    </div>
  )
}

export default CartItem