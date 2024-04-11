
import "../estilos/premios.css"

export const Premios = () =>{

    return(
        <section className="premios"> 
            <h2> Premios</h2>
            <h3>Se anunciarán 3 ganadores el día 19/4 a través de Instagram.</h3><h3> Los premios variarán según el puesto de cada ganador. </h3>
            <div className="texto">
                <ul>
                    <li>  <span> Primer lugar</span> Podrá elegir entre una bolsa de 22 kg de alimento para perro adulto de raza grande Excellent o una bolsa de 10 kg de alimento para gato adulto Agility.</li>
                    <li>  <span> Segundo lugar</span>  Una indumentaria a elección, que incluye buzos, polares y camperas.</li>
                    <li>  <span> Tercer lugar</span> Podrá elegir entre un rascador para gato o un juguete para perro.</li>
                </ul>
            </div>

            <div className="atencion">
                <h3> ¡ATENCIÓN! </h3>
                <p> Nos comunicaremos con cada ganador dentro de los tres días siguientes a la publicación de los resultados para reclamar su premio.<br/></p>
                <p>En caso de no recibir respuesta dentro de ese plazo, se seleccionará un nuevo ganador.<br/></p>
                <p>✔️Los ganadores se pueden intercambiar los premios
                </p>
            </div>
        </section>
    )
}