import "./index.css";
function Buttons (props) {
    return(
        <div
        className="btn btn-outline-warning"
        style={{fontFamily:props.font}}
        onClick={props.handleClick}
        >
   {props.valor}
        </div>
    )
}
export default Buttons;