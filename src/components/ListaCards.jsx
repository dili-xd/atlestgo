import React from 'react'
import CardEntreno from './CardEntreno'
import "../styles/Entrenos.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EstadoEntrenamiento from './EstadoEntrenamiento';

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
  )
}

export default ListaCards