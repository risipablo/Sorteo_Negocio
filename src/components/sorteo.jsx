import { useState } from "react";
import { Participantes } from "./participantes";
import { ThreeDots } from 'react-loader-spinner';
import "../estilos/lista.css"
import Reloj from "./reloj";
import imagen1 from "../imagenes/Felicidades.png"


function Sorteo() {

    const participantes = ["Juan", "María", "Luis", "Ana", "Carlos", "Laura", "Pedro", "Sofía", "Diego", "Lucía", 
    "Javier", "Valentina", "Miguel", "Elena", "Andrés", "Camila", "José", "Isabella", "Gabriel", "Daniela"]

    const imagen = imagen1

    const [ganador1, setGanador1] = useState('')
    const [ganador2, setGanador2] = useState('')
    const [ganador3, setGanador3] = useState('')

    const [sorteoRealizado, setSorteoRealizado] = useState(true);
    const [mostrarSpinner, setMostrarSpinner] = useState(false);

    const generarGanador = () => {
        setMostrarSpinner(true); // Mostrar el spinner antes de generar el ganador
        setTimeout(() => {
            const ganador = [];
            while (ganador.length < 3) {
                const ganadorIndex = Math.floor(Math.random() * participantes.length);
                if (!ganador.includes(ganadorIndex)) {
                    ganador.push(ganadorIndex);
                }
            }
            const ganador1 = participantes[ganador[0]];
            const ganador2 = participantes[ganador[1]];
            const ganador3 = participantes[ganador[2]];
            setGanador1(ganador1);
            setGanador2(ganador2);
            setGanador3(ganador3);
                setSorteoRealizado(false);
                setMostrarSpinner(false);
        }, 3000)
    }



    return (
        <section className="master">
            <h2> Participantes </h2>
                <Participantes participantes={participantes} />

                <div className="relojsorteo">
                    <p> Se habilitara el 29/04</p>
                </div>
                <Reloj/>

                {/* disabled={sorteoRealizado} */}

                <button onClick={() => { generarGanador(); setSorteoRealizado(true); }} >  
                Sortear 
                </button>

                {mostrarSpinner && 
                    <div style={{ display: 'flex', justifyContent: 'center', alignIjtetems: 'center', height: '100px' }}>
                        <ThreeDots
                            visible={true}
                            height="100"
                            width="100"
                            color="purple" // Cambiar el color a púrpura
                            radius="9"
                            ariaLabel="three-dots-loading"
                        />
                    </div>}
                    <div className="ganadores" >
                        <h2 > {
                        ganador1 && ganador2 && ganador3 && (
                            <>
                                <p className="ganador4"> <h3> Felicidades ganadores</h3> </p>
                                <p className="ganador1"> Primer puesto: {ganador1}.  </p> 
                                <p className="ganador2"> Segundo puesto: {ganador2}. </p> 
                                <p  className="ganador3"> Tercer puesto:  {ganador3}.</p>
                            </>
                            )
                        }
                        </h2>
                    </div>

            
        </section>
    )
}

export default Sorteo;































