import "../styles/Alertas.css"
const Alertas = ({nombreAlerta})=>{
    return(
        <>
            <div className="alerta-cont">
                <h2 className="alerta-titulo">Alerta</h2>
                {nombreAlerta}
            </div>
        </>
    )
}
export default Alertas