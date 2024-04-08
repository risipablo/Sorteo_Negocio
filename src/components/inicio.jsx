
import { NavLink } from "react-router-dom"
import "../estilos/inicio.css"
import Reloj from "./reloj"

export const Inicio = () =>{
    
    return(
        <section className="inicio">

            <h1>Sorteo de aniversario</h1>

            <div>
                <h2> ¡Participa para ganarte alguno de estos premios disponible! </h2>
            </div>

            <section className="participar">
                <h2>¿Como hago para participar?</h2>
                <NavLink to="/participar"> Ver instrucciones </NavLink>
            </section>

            <section className="sorteo">
                <h3>Tiempo disponible</h3>
                <Reloj/>
                <p> Se daran a conocer los ganadores el 29/04 por Instagram</p>
            </section>

            <section>
                <h2> Seguinos en nuestras redes </h2>
            </section>
        </section>
    )
}