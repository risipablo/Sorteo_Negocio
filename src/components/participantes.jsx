


export function Participantes({participantes}){
    const listaParticipantes = participantes.map ((participante,index) =>
    
        <li key={index} className="listado-item">
            {participante}
        </li>
    )

    return(
        <div className="participantes">
            <ul className="listado">{listaParticipantes}</ul>
        </div>
    )
}
