import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";
import Logo from '../img/logo.jpeg'

const NavBar = () => {

  return (
    <header>
      <Link to={"/"}>
        <img className="imgLogo" src={Logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <NavLink className="genre" to={`/categoria/misterio`}>Misterio</NavLink>
        </li>

        <li>
          <NavLink className="genre" to={`/categoria/fantasia`} >Fantasía/Distopía</NavLink>
        </li>

        <li>
          <NavLink className="genre" to={`/categoria/noficcion`} >No Ficción</NavLink>
        </li>

      </ul>
      <CartWidget />
    </header>
  )
}

export default NavBar