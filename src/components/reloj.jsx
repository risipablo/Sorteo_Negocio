import { useEffect, useState } from "react";
import "../estilos/reloj.css"

function Reloj(){

    const [dia,setDia] = useState(0);
    const [hora,setHora] = useState(0);
    const [min,setMin] = useState(0);
    const [seg,setSeg] = useState(0);
    const [periodo,setPeriodo] = useState("AM");

    useEffect(() => {
        const intervalo = setInterval(() => {
            const hoy = new Date (); // fecha actual 
            const limite = new Date("2024-04-29T09:00:00")

            const diaRestante = (limite.getDate() - hoy.getDate())
            const horaRestante = (limite.getHours() + 24  - hoy.getHours()) % 24 ;
            const minRestante = (limite.getMinutes() + 60 - hoy.getMinutes()) % 60;
            const segRestante = ( (limite.getSeconds() + 59 - hoy.getSeconds())) 

            setDia(diaRestante)
            setHora(horaRestante);
            setMin(minRestante >= 0 ? minRestante : 59);
            setSeg(segRestante >=0 ? segRestante : 60 + segRestante)
            setPeriodo(hoy.getHours() >= 12 ? 'AM' : 'PM')
        });

        return () => clearInterval(intervalo)
    },[])


    return(
        <div className="reloj">
            <span className="variable">{dia} 
            <span className="descripcion">Días</span>
            
            </span>

            <span className="separador"> : </span>

            <span className="variable">{hora}
            <span className="descripcion">Horas</span>
            </span>
            
            <span className="separador"> : </span>

            <span className="variable">{min}
            <span className="descripcion">Minutos</span>
            </span>

            <span className="separador"> : </span>
            
            <span className="variable">{seg} 
            <span className="descripcion">Segundos</span>
            </span>
            
            

            <span style={{display:"none"}}> {periodo} </span>
        </div>
    )
}
export default Reloj;
































