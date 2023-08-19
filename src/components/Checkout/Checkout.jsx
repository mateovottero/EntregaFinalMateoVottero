import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { db } from '../../service/firebase'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
  const [user, setUser]= useState({})
  const [validateEmail,setValidateEmail]= useState('')
  const [orderId, setOrderId]= useState('')
  const {cart, total, clear}= useContext(CartContext)
  const datosComprador = (e) =>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  const finalizarCompra = (e) => {
    e.preventDefault()
    if(!user.name && !user.phone){
      alert('Es necesario rellenar los campos')
    }else{
      let order = {
        user,
        item:cart,
        total:total(),
        date:serverTimestamp()
      }
      const ventas = collection(db, "orders")
      addDoc(ventas, order)
      .then((res)=>{
        setOrderId(res.id)
        clear()
      })
      .catch((error)=>console.log(error))
    }
  }

  console.log(user)
  return (
    <div>
      {orderId !== ''
      ? <div>
        <h2>Felicitaciones, tu orden fue generada con exito!</h2>
        <h5>Su id de compra es: {orderId}</h5>
      </div>
      :<div>
      <h2>terminar compra</h2>
      <h5>Por favor llenar con sus datos</h5>
      <form onSubmit={finalizarCompra}>
        <div className='mb-3'>
          <label className="form-label">Nombre Completo</label>
          <input className='form-control' onChange={datosComprador} type="text" placeholder='Nombre y Apellido' name='name'/>
        </div>
        <div className='mb-3'>
          <label className="form-label">Numero de telefono</label>
          <input className='form-control' onChange={datosComprador} type="number" placeholder='+54 3512065797' name='phone'/>
        </div>
        <div className='mb-3'>
          <label className="form-label">Email</label>
          <input className='form-control' onChange={datosComprador} type="email" placeholder='mateomateo@hotmail.com' name='mail'/>
        </div>
        <div className='mb-3'>
          <label className="form-label">Confirmar Email</label>
          <input className='form-control' type="email" placeholder='mateomateo@hotmail.com' name='mail' onChange={((e)=>setValidateEmail(e.target.value))}/>
        </div>
        <button className='btn btn-dark' type='submit' disable={validateEmail !== user.mail}>Generar Orden</button>
      </form>
    </div> }
    </div>
  )
}

export default Checkout