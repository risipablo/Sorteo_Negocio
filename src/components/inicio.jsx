
import { NavLink } from "react-router-dom"
import "../estilos/inicio.css"
import Reloj from "./reloj"
import Carousel from "./carousel";
import imagen1 from "../imagenes/pata.png"
import video1 from "../imagenes/fe.mp4"


export const Inicio = () =>{
    
    const imagen = [imagen1]
    const video = [video1]

    return(
        <section className="inicio">
            <section className="video-container">
                <video autoPlay loop>
                    <source src={video} type="video/mp4" />
                </video>
            </section>


            <section className="participar">
                <h2>¿ Como participar ?</h2>
                <div className="par">
                <NavLink to="/participar"> <span>👉</span> <a> Ver instrucciones </a></NavLink>
                </div>
            </section>

            <div className="imagen">
                <img src={imagen} alt="" />
            </div>

            <section className="carousel">
                <h2> ¡Participa por estos premios! </h2>
                    <Carousel />
                    <NavLink to="/premios"> <span>👉</span> <a> Ver premios </a></NavLink>
            </section>



            <section className="sorteo">
                <h2>El sorteo finaliza en  </h2>
                <Reloj/>
                
                <p> Los ganadores se anunciaran el 29/04 por Instagram</p>
                
            </section>

            <section className="redes">
                <h2> Nuestras redes </h2>
                <div className="iconos">
                <i className="fa-brands fa-instagram"> <a href="https://www.instagram.com/bambinapetshop/"></a></i>
                <i className="fa-brands fa-facebook"> <a href="https://www.facebook.com/Bambina.alimentosyaccesorios/"></a></i>
                </div>
            </section>

        </section>

    )
}