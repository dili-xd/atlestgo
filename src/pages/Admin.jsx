import React, { useState, useEffect } from 'react';
import { getInfo, posData } from "../services/fetch"; 
import "../styles/Admin.css"

function Admin() {
    const [tipoEntrenamiento,setTipoEntrenamiento] = useState("")
    const [tiempoAEntrenar,setTiempoAEntrenar] = useState("")
    const [descripcion,setDescripcion] = useState("")

    async function agregarEntreno() {
        const entrenos={
            tipoEntreno:tipoEntrenamiento,
            tiempoAEntrenar:tiempoAEntrenar,
            descripcion:descripcion      
        }
        await posData(entrenos,"entrenos")   
        
    }
    return(
        <>
            <div>
                <label htmlFor="">Tipo Entrenamiento</label>
                <input type="text" placeholder='Tipo de entrenamiento' onChange={(evento)=>setTipoEntrenamiento(evento.target.value)} />

                <label htmlFor="">Día de entreno</label>
                <select className='dias' onChange={(evento)=>setTiempoAEntrenar(evento.target.value)}>
                    <option value="lunes">Lunes</option>
                    <option value="martes">Martes</option>
                    <option value="miércoles">Miércoles</option>
                    <option value="jueves">Jueves</option>
                    <option value="viernes">Viernes</option>
                    <option value="sábado">Sábado</option>
                    <option value="domingo">Domingo</option>
                </select>

                <label htmlFor="">Descripción</label>
                <textarea className='descripcion' onChange={(evento)=>setDescripcion(evento.target.value)} name=""></textarea>

                <button className='boton' onClick={agregarEntreno}>Añadir entrenamiento</button>
            </div>
        </>
    )
}

export default Admin;

