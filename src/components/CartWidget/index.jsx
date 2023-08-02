import "./index.css"
import { FaShoppingCart } from 'react-icons/fa'
function Cartwidget (props) {
    return(
<>
<div className="cart">
   <FaShoppingCart/>
   {props.valor}
</div>

</>
    )
}
export default Cartwidget