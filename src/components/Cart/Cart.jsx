import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../Cartitem/CartItem'

const Cart = () => {
const{cart, clear, total} = useContext(CartContext)
  return (
    <div>
        {cart.length > 0  ? (
        <div>
            {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
            <p>total a pagar: ${total()}</p>
            <div>
                <button className='btn btn-danger' onClick={clear}>vaciar carrito</button>
                <Link className='btn btn-danger' to='/checkout'>terminar compra</Link>
            </div>
        </div>
        ):( <div>
            <h3>tu carrito esta vacio! lleva algo rata</h3>
            <Link to='/' className='btn btn-dark'> ir a comprar </Link>
         </div>
         )}
    </div>
  )
}

export default Cart