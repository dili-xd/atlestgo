import React from 'react'
import "../styles/Entrenos.css"

function CardEntreno({img,titulo,descripcion,tiempoEntreno,btnModal}) {
  return (
    <>
    
        <div className='cuadritos'>
            <section>
                <img src={img} alt="" />
            </section>
            <h3>
             {titulo}
            </h3>
            <article>
                <p>{descripcion}</p>
                <p>{tiempoEntreno}</p>
            </article>
            <button onClick={btnModal} className='boton'>Ir</button>
        </div>
    </>
  )
}

export default CardEntreno