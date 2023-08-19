import { useContext } from "react"
import "./index.css"
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from "../../context/CartContext"
import { Badge } from "react-bootstrap"
function Cartwidget () {
    const {cartQuantity} = useContext(CartContext)
    return(
        <div className="cart">
        <FaShoppingCart color='black'/>
        {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}
export default Cartwidget
