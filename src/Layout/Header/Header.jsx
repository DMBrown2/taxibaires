import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/header/logo.jpg';


export default function Header() {



  return (
    <div className="main-header">
      {/* MENU HAMBURGUESA  */}
      <input type="checkbox" id="burger" className="input-burger" />
      <label className="burger-container" htmlFor="burger">
        <div className="burger" />
      </label>
      {/* CLAIM + LOGO + USER INFO  */}
      <div className="contenedor-logo">
        <NavLink to="/" className="nav-link">
          <img
            className="logo"
            src={logo}
            alt="LOGO"
          />
        </NavLink>
      </div>

      {/* //MAIN NAV */}
      <nav className="main-nav">
        <ul className="nav-list">
          {/* Enlaces del menu de navegacion */}
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Inicio</NavLink>
          </li>

           <li className="nav-item">
            <NavLink to="/servicios" className="nav-link">Servicios</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/nosotros" className="nav-link">Sobre nosotros</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/resenas" className="nav-link">Resenas</NavLink>
          </li>


          <li className="nav-item">
            <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
          </li>



        </ul>
      </nav>
    </div>
  )
}
