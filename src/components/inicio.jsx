
import { NavLink } from "react-router-dom"
import "../estilos/inicio.css"
import Reloj from "./reloj"
import Carousel from "./carousel";
import imagen1 from "../imagenes/pata.png"
import video1 from "../imagenes/fe.mp4"
import video2 from "../imagenes/video.mp4"
import ProgressBar from "react-scroll-progress-bar";


export const Inicio = () =>{
    
    const imagen = imagen1;
    const video = video1;
    const vide0 = video2;

    return(
        <>
        <ProgressBar height="3" bgcolor="#red" duration="0.2" />
        <section className="inicio">
            
            <section className="video-container">
                <div className="vid1">
                    <video autoPlay loop>
                        <source  src={video} type="video/mp4" />
                    </video>
                </div>

                <div className="vid2">
                    <video autoPlay loop>
                        <source src={vide0} type="video/mp4" />
                    </video>
                </div>

            </section>

            <section className="section">
                <div className="participar">
                    <h2>¿Cómo participar?</h2>
                    <div className="par">
                    <NavLink to="/participar"> <span>👉</span> <a> Ver instrucciones </a></NavLink>
                    </div>
                </div>

                <div className="participar">
                    <h2>Lista de participantes</h2>
                    <div  className="par">
                        <NavLink to="/sorteo">  <span>👉</span> <a> Ver participantes </a> </NavLink>
                    </div>
                </div>
            </section>

            <div className="imagen">
                <img src={imagen} alt="asdasdas" />
            </div>


            <section className="carousel">
                <h2> ¡Participa por estos premios! </h2>
                    <Carousel />
                    <NavLink to="/premios"> <span>👉</span> <a> Ver premios </a></NavLink>
            </section>



            <section className="sorteo">
                <h2>El sorteo finaliza en  </h2>
                <Reloj/>
                <p> Los ganadores se anunciaran el 19/04 por Instagram</p>
            </section>

            

            <section className="redes">
                <h2> Nuestras redes </h2>
                <div className="iconos">
                <a href="https://www.instagram.com/bambinapetshop/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/Bambina.alimentosyaccesorios/"><i className="fa-brands fa-facebook"></i> </a>
                </div>
            </section>

        </section>
        </>
    )
}