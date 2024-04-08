
import { NavLink } from "react-router-dom"
import "../estilos/inicio.css"
import Reloj from "./reloj"
import Carousel from "./carousel";


export const Inicio = () =>{
    

    return(
        <section className="inicio">

            <h1>Sorteo de aniversario</h1>

            <div className="carousel">
                <h2> ¡Participa por estos premios! </h2>
                    <Carousel />
            </div>

            <section className="participar">
                <h2>¿ Como participar ?</h2>
                <NavLink to="/participar"> <a> Ver instrucciones </a></NavLink>
            </section>

            <section className="sorteo">
                <h3>El sorteo finaliza en  </h3>
                <Reloj/>
                
                <p> Los ganadores se anunciaran el 29/04 por Instagram</p>
                
            </section>

            <section className="redes">
                <h2> Seguinos en nuestras redes </h2>
                <div className="iconos">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                </div>
            </section>

            

        </section>
    )
}