import React, { useState } from 'react'
import "../styles/Estado.css"
import { posData } from '../services/fetch'

function EstadoEntrenamiento() {
    const [calSuenio, setCalSuenio] = useState(0)
    const [fatAcum, setFatAcum] = useState(0)
    const [percpEsfuerzo, setPercpEsfuerzo] = useState(0)
    const [dolorMus, setDolorMus] = useState(0)
    const [vigor, setVigor] = useState(0)
    const [entusiasmo, setEntusiasmo] = useState(0)
    const [irrirta, setIrrita] = useState(0)
    const [estres, setEstres] = useState(0)
    const [competencia, setCompetencia] = useState(0)
    const [enfermedad, setEnfermedad] = useState(0)
    const [comentario, setComentario] = useState("")
    async function enviarEntreno() {
        const entreno = {
            suenio: calSuenio,
            fatiga: fatAcum,
            esfuerzo: percpEsfuerzo,
            dolorMuscular: dolorMus,
            vigor: vigor,
            entusiasmo: entusiasmo,
            irritabilidad: irrirta,
            estres: estres,
            competencia: competencia,
            enfermedad: enfermedad,
            idEntreno: localStorage.getItem("idEntreno"),
            idUsuario: localStorage.getItem("idUsuario"),
            comentario: comentario
        }
        if (calSuenio === 0 || fatAcum === 0 || percpEsfuerzo === 0 || dolorMus === 0 || vigor === 0
            || entusiasmo === 0 || irrirta === 0 || estres === 0 || competencia === 0) {
            alert("RELLENE LOS DATOS")
            return
        }
        await posData(entreno, "estado")
    }
    return (
        <>
            <label className='label' htmlFor="">Calidad de sueño</label>
            <div className='buton'>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csA"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setCalSuenio(1)
                    e.target.style.backgroundColor = "yellow"
                }} className='csA'>1</button>
                <button className='csA' onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csA"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });

                    setCalSuenio(2)
                    e.target.style.backgroundColor = "yellow"
                }}>2</button>
                <button className='csA' onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csA"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    e.target.style.backgroundColor = "yellow"

                    setCalSuenio(3)
                }}>3</button>
                <button className='csA' onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csA"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    e.target.style.backgroundColor = "yellow"

                    setCalSuenio(4)
                }}>4</button>
                <button className='csA' onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csA"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    e.target.style.backgroundColor = "yellow"

                    setCalSuenio(5)
                }}>5</button><button className='csA' onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csA"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    e.target.style.backgroundColor = "yellow"

                    setCalSuenio(6)
                }}>6</button>
                <button className='csA' onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csA"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    e.target.style.backgroundColor = "yellow"

                    setCalSuenio(7)
                }}>7</button>
                <button className='csA' onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csA"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    e.target.style.backgroundColor = "yellow"

                    setCalSuenio(8)
                }}>8</button><button className='csA' onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csA"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    e.target.style.backgroundColor = "yellow"

                    setCalSuenio(9)
                }}>9</button><button className='csA' onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csA"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    e.target.style.backgroundColor = "yellow"

                    setCalSuenio(6)
                }}>10</button>
            </div>
            <label className='label' htmlFor="">Fatiga acomulada</label>
            <div className='buton'>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csB"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setFatAcum(1)
                    e.target.style.backgroundColor = "yellow"
                }} className='csB'>1</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csB"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setFatAcum(2)
                    e.target.style.backgroundColor = "yellow"
                }} className='csB'>2</button>
                <button
                    onClick={(e) => {
                        let btns = Array.from(document.querySelectorAll(".csB"))
                        btns.forEach(function (btn) {
                            btn.style.backgroundColor = "black";
                        });
                        setFatAcum(3)
                        e.target.style.backgroundColor = "yellow"
                    }} className='csB'>3</button><button
                        onClick={(e) => {
                            let btns = Array.from(document.querySelectorAll(".csB"))
                            btns.forEach(function (btn) {
                                btn.style.backgroundColor = "black";
                            });
                            setFatAcum(4)
                            e.target.style.backgroundColor = "yellow"
                        }} className='csB'>4</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csB"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setFatAcum(5)
                    e.target.style.backgroundColor = "yellow"
                }} className='csB'>5</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csB"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setFatAcum(5)
                    e.target.style.backgroundColor = "yellow"
                }} className='csB'>6</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csB"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setFatAcum(6)
                    e.target.style.backgroundColor = "yellow"
                }} className='csB'>7</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csB"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setFatAcum(7)
                    e.target.style.backgroundColor = "yellow"
                }} className='csB'>8</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csB"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setFatAcum(8)
                    e.target.style.backgroundColor = "yellow"
                }} className='csB'>9</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csB"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setFatAcum(9)
                    e.target.style.backgroundColor = "yellow"
                }} className='csB'>10</button>
            </div>
            <label className='label' htmlFor="">Percepcion de esfuerzo</label>
            <div className='buton'>
                <button
                    onClick={(e) => {
                        let btns = Array.from(document.querySelectorAll(".csC"))
                        btns.forEach(function (btn) {
                            btn.style.backgroundColor = "black";
                        });
                        setPercpEsfuerzo(1)
                        e.target.style.backgroundColor = "yellow"
                    }} className='csC'>1</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csC"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setPercpEsfuerzo(2)
                    e.target.style.backgroundColor = "yellow"
                }} className='csC'>2</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csC"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setPercpEsfuerzo(3)
                    e.target.style.backgroundColor = "yellow"
                }} className='csC'>3</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csC"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setPercpEsfuerzo(4)
                    e.target.style.backgroundColor = "yellow"
                }} className='csC'>4</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csC"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setPercpEsfuerzo(5)
                    e.target.style.backgroundColor = "yellow"
                }} className='csC' >5</button><button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csC"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setPercpEsfuerzo(6)
                    e.target.style.backgroundColor = "yellow"
                }} className='csC'>6</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csC"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setPercpEsfuerzo(7)
                    e.target.style.backgroundColor = "yellow"
                }} className='csC' >7</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csC"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setPercpEsfuerzo(8)
                    e.target.style.backgroundColor = "yellow"
                }} className='csC'>8</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csC"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setPercpEsfuerzo(9)
                    e.target.style.backgroundColor = "yellow"
                }} className='csC' >9</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csC"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setPercpEsfuerzo(10)
                    e.target.style.backgroundColor = "yellow"
                }} className='csC' >10</button>
            </div>
            <label className='label' htmlFor="">Dolor muscular</label>
            <div className='buton'>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csD"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setDolorMus(1)
                    e.target.style.backgroundColor = "yellow"
                }} className='csD'>1</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csD"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setDolorMus(2)
                    e.target.style.backgroundColor = "yellow"
                }} className='csD'>2</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csD"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setDolorMus(3)
                    e.target.style.backgroundColor = "yellow"
                }} className='csD' >3</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csD"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setDolorMus(4)
                    e.target.style.backgroundColor = "yellow"
                }} className='csD' >4</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csD"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setDolorMus(5)
                    e.target.style.backgroundColor = "yellow"
                }} className='csD' >5</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csD"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setDolorMus(6)
                    e.target.style.backgroundColor = "yellow"
                }} className='csD' >6</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csD"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setDolorMus(7)
                    e.target.style.backgroundColor = "yellow"
                }} className='csD' >7</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csD"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setDolorMus(8)
                    e.target.style.backgroundColor = "yellow"
                }} className='csD' >8</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csD"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setDolorMus(9)
                    e.target.style.backgroundColor = "yellow"
                }} className='csD' >9</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csD"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setDolorMus(10)
                    e.target.style.backgroundColor = "yellow"
                }} className='csD' >10</button>
            </div>
            <label className='label' htmlFor="">Vigor</label>
            <div className='buton'>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csE"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setVigor(1)
                    e.target.style.backgroundColor = "yellow"
                }} className='csE'>1</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csE"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setVigor(2)
                    e.target.style.backgroundColor = "yellow"
                }} className='csE' >2</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csE"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setVigor(3)
                    e.target.style.backgroundColor = "yellow"
                }} className='csE' >3</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csE"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setVigor(4)
                    e.target.style.backgroundColor = "yellow"
                }} className='csE' >4</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csE"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setVigor(5)
                    e.target.style.backgroundColor = "yellow"
                }} className='csE' >5</button>
            </div>
            <label className='label' htmlFor="">Entusiasmo</label>
            <div className='buton'>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csF"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEntusiasmo(1)
                    e.target.style.backgroundColor = "yellow"
                }} className='csF' >1</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csF"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEntusiasmo(2)
                    e.target.style.backgroundColor = "yellow"
                }} className='csF' >2</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csF"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEntusiasmo(3)
                    e.target.style.backgroundColor = "yellow"
                }} className='csF' >3</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csF"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEntusiasmo(4)
                    e.target.style.backgroundColor = "yellow"
                }} className='csF'>4</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csF"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEntusiasmo(5)
                    e.target.style.backgroundColor = "yellow"
                }} className='csF' >5</button>
            </div>
            <label className='label' htmlFor="">Irritabilidad</label>
            <div className='buton'>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csG"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setIrrita(1)
                    e.target.style.backgroundColor = "yellow"
                }} className='csG' >1</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csG"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setIrrita(2)
                    e.target.style.backgroundColor = "yellow"
                }} className='csG' >2</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csG"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setIrrita(3)
                    e.target.style.backgroundColor = "yellow"
                }} className='csG' >3</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csG"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEntusiasmo(4)
                    e.target.style.backgroundColor = "yellow"
                }} className='csG' >4</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csG"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setIrrita(5)
                    e.target.style.backgroundColor = "yellow"
                }} className='csG' >5</button>
            </div>
            <label className='label' htmlFor="">Estrés</label>
            <div className='buton'>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csI"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEstres(1)
                    e.target.style.backgroundColor = "yellow"
                }} className='csI'>1</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csI"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEstres(2)
                    e.target.style.backgroundColor = "yellow"
                }} className='csI' >2</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csI"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEstres(3)
                    e.target.style.backgroundColor = "yellow"
                }} className='csI'>3</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csI"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEstres(4)
                    e.target.style.backgroundColor = "yellow"
                }} className='csI' >4</button>
                <button onClick={(e) => {
                    let btns = Array.from(document.querySelectorAll(".csI"))
                    btns.forEach(function (btn) {
                        btn.style.backgroundColor = "black";
                    });
                    setEstres(5)
                    e.target.style.backgroundColor = "yellow"
                }} className='csI'>5</button>
            </div>
            <section className='cont-box' onChange={(e) => setCompetencia(e.target.value)}>
                <label htmlFor="">Competencia</label>
                <input className='box' type='checkbox' />
            </section>
            <section className='cont-box' onChange={(e) => setEnfermedad(e.target.value)}>
                <label htmlFor="">Enfermedad</label>
                <input className='box' type="checkbox" />
                <textarea className='comentario' name="" id="" onChange={(e) => setComentario(e.target.value)}></textarea>
            </section>


            <button className='boton' onClick={() => {
            alert('Entrenamiento enviado con éxito!');
                enviarEntreno();
            }}>
                Enviar
            </button>





        </>
    )
}

export default EstadoEntrenamiento
