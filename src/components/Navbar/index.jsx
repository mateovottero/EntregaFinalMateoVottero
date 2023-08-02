import Buttons from "../Buttons";
import Cartwidget from "../CartWidget";
import Brand from "../Brand";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./index.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="container">
        <div className="contentBar mt-3">
          <NavLink to="/" className="brand">
            <Brand />
          </NavLink>
          <div>
            <ButtonGroup aria-label="First group">
              <Button variant="secondary" as={NavLink} to='/category/auriculares'>Auriculares</Button>
              <Button variant="secondary" as={NavLink} to='/category/mouse'>Mouse</Button>
              <Button variant="secondary" as={NavLink} to='/category/teclado'>Teclado</Button>
              <Button variant="secondary" as={NavLink} to='/'>Todos</Button>
            </ButtonGroup>
          </div>

          <Cartwidget valor="0" />
        </div>
      </div>
    </>
  );
}
export default NavBar;
