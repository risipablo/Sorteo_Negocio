import { NavLink} from 'react-router-dom';
import "../estilos/navbar.css"
import { useState } from 'react';
import logo1 from "../imagenes/navbar.png"

function NavMenu() {

    const [open,Setopen] = useState(false)

    const abrirMenu = () => {
        Setopen (!open)
    }

    const cerrarMenu = () => {
        Setopen (false)
    }

    const logo = logo1;


    return(
        <nav className='container' >
            
            <div className='navbar'>
            
                <div className={`menu ${open ? 'open' :"" }`}>
                    <NavLink to="/"  onClick={cerrarMenu}> <a> 🐾 Inicio</a></NavLink>
                    <NavLink to="/sorteo" onClick={cerrarMenu}> <a>🐾 Sorteo</a></NavLink>
                    <NavLink to="/participar"  onClick={cerrarMenu}> <a> 🐾 ¿Como participar?</a></NavLink>
                    <NavLink to="/premios"  onClick={cerrarMenu}> <a> 🐾 Premios </a></NavLink>
                </div>

                <div className='logo'> 
                <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                </div>

                <div className='menu-icon' onClick={abrirMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </nav>
    )
}

export default NavMenu;



