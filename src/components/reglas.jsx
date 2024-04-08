
import "../estilos/reglas.css"


function Reglas(){

    return(
        <section className="reglas">
            <h2> ¿ Como participar ?</h2>

            
            <div className="numeros">
                <div className="pri">
                    <p> <span> Paso 1:  </span> Seguirnos en nuestro  <a href="https://www.instagram.com/bambinapetshop/">Instagram  </a> oficial </p>
                    <i className="fa-solid fa-plus"> </i>
                </div>
                <div className="seg">
                    <p> <span> Paso 2: </span> Darle me gusta al post publicado </p>
                    <i className="fa-solid fa-heart"></i>
                </div>
                <div className="ter">
                    <p> <span> Paso 3 : </span> Compartir ese mismo post por historias y etiquetarnos</p>
                    <i className="fa-solid fa-hashtag"></i>
                </div>
            </div>

            <div className="info">
                <h4> Si cumplistes con estos requisitos, ya estas participando en nuestro sorteo.</h4>
                <h3> Buena Suerte 💪</h3>
            </div>

        </section>
    )
}

export default Reglas;