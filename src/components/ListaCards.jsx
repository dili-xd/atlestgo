import React from 'react'
import CardEntreno from './CardEntreno'
import "../styles/Entrenos.css"

function ListaCards({lista}) {
  return (
    <>
    <div className='listita'>
        {lista.map((entreno)=>{
            return(
            <CardEntreno
              key={entreno.id}
                titulo={entreno.tipoEntreno}
                descripcion={entreno.descripcion}
                tiempoEntreno={entreno.tiempoAEntrenar}
            />
        )
        })}
    </div>
    </>
  )
}

export default ListaCards