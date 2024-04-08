import { NavLink} from 'react-router-dom';
import "../estilos/navbar.css"
import { useState } from 'react';

function NavMenu() {

    const [open,Setopen] = useState(false)

    const abrirMenu = () => {
        Setopen (!open)
    }

    const cerrarMenu = () => {
        Setopen (false)
    }






    return(
        <nav className='container' >
            <div className='navbar'>

                <div className={`menu ${open ? 'open' :"" }`}>
                    <NavLink to="/"  onClick={cerrarMenu}> <a> Inicio</a></NavLink>
                    <NavLink to="/sorteo" onClick={cerrarMenu}> <a> Sorteo</a></NavLink>
                    <NavLink to="/participar"  onClick={cerrarMenu}> <a> ¿Como participar?</a></NavLink>
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



