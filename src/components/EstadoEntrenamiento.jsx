import React, { useState } from 'react'
import "../styles/Estado.css"
import { posData } from '../services/fetch'

function EstadoEntrenamiento() {
    const [calSuenio,setCalSuenio] = useState(0)
    const [fatAcum,setFatAcum] = useState(0)
    const [percpEsfuerzo,setPercpEsfuerzo] = useState(0)
    const [dolorMus,setDolorMus] = useState(0)
    const [vigor,setVigor] = useState(0)
    const [entusiasmo,setEntusiasmo] = useState(0)
    const [irrirta,setIrrita] = useState(0)
    const [estres,setEstres] = useState(0)
    const [competencia,setCompetencia] = useState(0)
    const [enfermedad,setEnfermedad] = useState(0)

    async function enviarEntreno() {
        const entreno = {
            suenio: calSuenio,
            fatiga:fatAcum,
            esfuerzo:percpEsfuerzo,
            dolorMuscular:dolorMus,
            vigor:vigor,
            entusiasmo:entusiasmo,
            irritabilidad:irrirta,
            estres:estres,
            competencia:competencia,
            enfermedad:enfermedad,
            idEntreno: localStorage.getItem("idEntreno")
        }
        await posData(entreno,"estado")

    }
    return (
        <>
            <label className='label' htmlFor="">Calidad de sueño</label>
            <div className='buton'>
                <button onClick={(e)=>setCalSuenio(1)}>1</button><button onClick={(e)=>setCalSuenio(2)}>2</button><button onClick={(e)=>setCalSuenio(3)}>3</button><button onClick={(e)=>setCalSuenio(4)}>4</button><button onClick={(e)=>setCalSuenio(5)}>5</button><button onClick={(e)=>setCalSuenio(6)}>6</button><button onClick={(e)=>setCalSuenio(7)}>7</button><button onClick={(e)=>setCalSuenio(8)}>8</button><button onClick={(e)=>setCalSuenio(9)}>9</button><button onClick={(e)=>setCalSuenio(10)}>10</button>
            </div>
            <label className='label' htmlFor="">Fatiga acomulada</label>
            <div className='buton'>
                <button onClick={(e)=>setFatAcum(1)}>1</button><button  onClick={(e)=>setFatAcum(2)}>2</button><button  onClick={(e)=>setFatAcum(3)}>3</button><button  onClick={(e)=>setFatAcum(4)}>4</button><button  onClick={(e)=>setFatAcum(5)}>5</button><button  onClick={(e)=>setFatAcum(6)}>6</button><button  onClick={(e)=>setFatAcum(7)}>7</button><button  onClick={(e)=>setFatAcum(8)}>8</button><button  onClick={(e)=>setFatAcum(9)}>9</button><button  onClick={(e)=>setFatAcum(10)}>10</button>
            </div>
            <label className='label' htmlFor="">Percepcion de esfuerzo</label>
            <div className='buton'>
                <button onClick={(e)=>setPercpEsfuerzo(1)}>1</button><button onClick={(e)=>setPercpEsfuerzo(2)}>2</button><button onClick={(e)=>setPercpEsfuerzo(3)}>3</button><button onClick={(e)=>setPercpEsfuerzo(4)}>4</button><button onClick={(e)=>setPercpEsfuerzo(5)}>5</button><button onClick={(e)=>setPercpEsfuerzo(6)}>6</button><button onClick={(e)=>setPercpEsfuerzo(7)}>7</button><button onClick={(e)=>setPercpEsfuerzo(8)}>8</button><button onClick={(e)=>setPercpEsfuerzo(9)}>9</button><button onClick={(e)=>setPercpEsfuerzo(10)}>10</button>
            </div>
            <label className='label' htmlFor="">Dolor muscular</label>
            <div className='buton'>
                <button onClick={(e)=>setDolorMus(1)}>1</button><button onClick={(e)=>setDolorMus(2)}>2</button><button onClick={(e)=>setDolorMus(3)}>3</button><button onClick={(e)=>setDolorMus(4)}>4</button><button onClick={(e)=>setDolorMus(5)}>5</button><button onClick={(e)=>setDolorMus(6)}>6</button><button onClick={(e)=>setDolorMus(7)}>7</button><button onClick={(e)=>setDolorMus(8)}>8</button><button onClick={(e)=>setDolorMus(9)}>9</button><button onClick={(e)=>setDolorMus(10)}>10</button>
            </div>
            <label className='label' htmlFor="">Vigor</label>
            <div className='buton'>
                <button onClick={(e)=>setVigor(1)}>1</button><button onClick={(e)=>setVigor(2)}>2</button><button onClick={(e)=>setVigor(3)}>3</button><button onClick={(e)=>setVigor(4)}>4</button><button onClick={(e)=>setVigor(5    )}>5</button>
            </div>
            <label className='label' htmlFor="">Entusiasmo</label>
            <div className='buton'>
                <button onClick={(e)=>setEntusiasmo(1)}>1</button><button onClick={(e)=>setEntusiasmo(2)}>2</button><button onClick={(e)=>setEntusiasmo(3)}>3</button><button onClick={(e)=>setEntusiasmo(4)}>4</button><button onClick={(e)=>setEntusiasmo(5)}>5</button>
            </div>
            <label className='label' htmlFor="">Irritabilidad</label>
            <div className='buton'>
                <button onClick={(e)=>setIrrita(1)}>1</button><button onClick={(e)=>setIrrita(2)}>2</button><button onClick={(e)=>setIrrita(3)}>3</button><button onClick={(e)=>setIrrita(4)}>4</button><button onClick={(e)=>setIrrita(5)}>5</button>
            </div>
            <label className='label' htmlFor="">Estrés</label>
            <div className='buton'>
                <button onClick={(e)=>setEstres(1)}>1</button><button onClick={(e)=>setEstres(2)}>2</button><button onClick={(e)=>setEstres(3)}>3</button><button onClick={(e)=>setEstres(4)}>4</button><button onClick={(e)=>setEstres(5)}>5</button>
            </div>
            <section className='cont-box' onChange={(e)=>setCompetencia(e.target.value)}>
                <label htmlFor="">Competencia</label>
                <input  className='box' type='checkbox'/>
            </section>
            <section className='cont-box' onChange={(e)=>setEnfermedad(e.target.value)}>
                <label htmlFor="">Enfermedad</label>
                <input className='box' type="checkbox" />
                <textarea className='comentario' name="" id=""></textarea>
            </section>

        
            <button onClick={enviarEntreno}>Enviar</button>
            
    

        </>
    )
}

export default EstadoEntrenamiento