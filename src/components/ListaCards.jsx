import React from 'react'
import CardEntreno from './CardEntreno'
import "../styles/Entrenos.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EstadoEntrenamiento from './EstadoEntrenamiento';

// ListaCards muestra tarjetas con info de entrenos. 
function ListaCards({ lista }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className='listita'>
        {lista.map((entreno) => {
          return (
            <CardEntreno
              key={entreno.id}
              titulo={entreno.tipoEntreno}
              descripcion={entreno.descripcion}
              tiempoEntreno={entreno.tiempoAEntrenar}
              btnModal={()=>{
                handleShow()
                localStorage.setItem("idEntreno",entreno.id)
              }}
            />
          )
        })}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Estado Entrenamiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EstadoEntrenamiento />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    // Esto muestra el estado del entrenamiento
    //  Se abre con "show" y se cierra con "handleClose". Tiene un título, 
    // el componente <EstadoEntrenamiento /> en el cuerpo y un botón para cerrarlo en el pie de página.

  )
}

export default ListaCards