import { useState } from 'react'
import Button from '../Buttons'
import "./itemCount.css"

const ItemCount = ({stock,onAdd,initial}) => {
  const [count, setCount] = useState(initial)

  const sumar = ()=> {
    if(count< stock){
      setCount(count + 1)
    }

  }
  const restar = ()=> {
    if (count> 0 ){
      setCount(count - 1)
    }

  }
  return (
    <div>
        <div className='mt-3 bg-light counter'>
            <Button
            valor="+1"
            handleClick={() =>sumar()}></Button>
            <span className=' border border-2 border-info bg-secondary text-info fw-bold fs-4 ms-2 me-2 btn'> {count} </span>
            <Button
            valor="-1"
            handleClick={() =>restar()}></Button>

            <Button
              valor="Comprar"
            handleClick={() =>onAdd(count)}></Button>
        </div>
    </div>
  )
}

export default ItemCount