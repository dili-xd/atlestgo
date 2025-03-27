import React, { useState, useEffect } from 'react';
import { deleteData, getInfo, patchData, posData } from "../services/fetch";
import "../styles/Admin.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Admin() {
    const [tipoEntrenamiento, setTipoEntrenamiento] = useState("")
    const [tiempoAEntrenar, setTiempoAEntrenar] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [entrenos, setEntrenos] = useState([])
    const [recarga, setRecarga] = useState(false)
    const [show, setShow] = useState(false);
    const [tipoEntrenamientoE, setTipoEntrenamientoE] = useState("")
    const [tiempoAEntrenarE, setTiempoAEntrenarE] = useState("")
    const [descripcionE, setDescripcionE] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function traerEntrenos() {
            const datos = await getInfo("entrenos")
            setEntrenos(datos)
        }
        traerEntrenos()
    }, [recarga])

    async function agregarEntreno() {
        const entrenos = {
            tipoEntreno: tipoEntrenamiento,
            tiempoAEntrenar: tiempoAEntrenar,
            descripcion: descripcion
        }
        await posData(entrenos, "entrenos")
        setRecarga(!recarga)

    }
    async function eliminarEntreno(id) {
        await deleteData("entrenos", id)
        setRecarga(!recarga)
    }
    async function editarEntreno(id) {
        
        
        const edicion={
            tipoEntreno:tipoEntrenamiento,
            tiempoAEntrenar:tiempoAEntrenarE,
            descripcion:descripcionE
        }

        
        console.log(edicion);
        
   
        
      await patchData(edicion,"entrenos",id)
        setRecarga(!recarga)
        handleClose()
    }
    return (
        <>
            <div className='contenedorz'>
                <label htmlFor="">Tipo Entrenamiento</label>
                <input type="text" placeholder='Tipo de entrenamiento' onChange={(evento) => setTipoEntrenamiento(evento.target.value)} />
                <label className='titleDia' htmlFor="">Día de entreno</label>
                <select className='dias' onChange={(evento) => setTiempoAEntrenar(evento.target.value)}>
                    <option value="lunes">Lunes</option>
                    <option value="martes">Martes</option>
                    <option value="miércoles">Miércoles</option>
                    <option value="jueves">Jueves</option>
                    <option value="viernes">Viernes</option>
                    <option value="sábado">Sábado</option>
                    <option value="domingo">Domingo</option>
                </select>

                <label htmlFor="">Descripción</label>
                <textarea className='descripcion' onChange={(evento) => setDescripcion(evento.target.value)} name=""></textarea>

                <button className='boton' onClick={agregarEntreno}>Añadir entrenamiento</button>
            </div>

            <div className='listaa'>
                {entrenos.map((entreno) => {
                    return (
                        <div className='cuadritos' key={entreno}>
                            <h3>
                                {entreno.tipoEntreno}
                            </h3>
                            <article>
                                <p>{entreno.descripcion}</p>
                                <p>{entreno.tiempoEntreno}</p>
                                <p>{entreno.tiempoAEntrenar}</p>
                            </article>
                            <button className='boton1' onClick={() => eliminarEntreno(entreno.id)}>Eliminar</button>
                            <button className='boton1' onClick={()=>{
                                handleShow()
                                localStorage.setItem("entreno",entreno.id)
                            }}>Editar</button>
                        </div>
                    )
                })}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar</Modal.Title>
                </Modal.Header>
                <Modal.Body>Editar el entreno
                    
                    <input className='input1' type="text" onChange={(evento)=> setDescripcionE(evento.target.value)}/>
                    <input className='input1' type="text" onChange={(evento)=> setTipoEntrenamiento (evento.target.value)} />
                    <select className='dias' onChange={(evento) => setTiempoAEntrenarE(evento.target.value)}>
                        <option value="lunes">Lunes</option>
                        <option value="martes">Martes</option>
                        <option value="miércoles">Miércoles</option>
                        <option value="jueves">Jueves</option>
                        <option value="viernes">Viernes</option>
                        <option value="sábado">Sábado</option>
                        <option value="domingo">Domingo</option>
                    </select>

                </Modal.Body>
                <Modal.Footer>
                    <Button className='boton1' variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button className='boton' variant="primary" onClick={()=>editarEntreno(localStorage.getItem("entreno"))}>
                        Guardar
                    </Button> 
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default Admin;

