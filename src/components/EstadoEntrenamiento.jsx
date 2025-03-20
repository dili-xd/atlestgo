import React from 'react'
import "../styles/Estado.css"

function EstadoEntrenamiento() {
    return (
        <>
            <label className='label' htmlFor="">Calidad de sueño</label>
            <div className='buton'>
                <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>6</button><button>7</button><button>8</button><button>9</button><button>10</button>
            </div>
            <label className='label' htmlFor="">Fatiga acomulada</label>
            <div className='buton'>
                <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>6</button><button>7</button><button>8</button><button>9</button><button>10</button>
            </div>
            <label className='label' htmlFor="">Percepcion de esfuerzo</label>
            <div className='buton'>
                <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>6</button><button>7</button><button>8</button><button>9</button><button>10</button>
            </div>
            <label className='label' htmlFor="">Dolor muscular</label>
            <div className='buton'>
                <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>6</button><button>7</button><button>8</button><button>9</button><button>10</button>
            </div>
            <label className='label' htmlFor="">Vigor</label>
            <div className='buton'>
                <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button>
            </div>
            <label className='label' htmlFor="">Entusiasmo</label>
            <div className='buton'>
                <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button>
            </div>
            <label className='label' htmlFor="">Irritabilidad</label>
            <div className='buton'>
                <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button>
            </div>
            <label className='label' htmlFor="">Estrés</label>
            <div className='buton'>
                <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button>
            </div>
            <section className='cont-box'>
                <label htmlFor="">Competencia</label>
                <input  className='box' type='checkbox'/>
            </section>
            <section className='cont-box'>
                <label htmlFor="">Enfermedad</label>
                <input className='box' type="checkbox" />
                <textarea className='comentario' name="" id=""></textarea>
            </section>

            
    

        </>
    )
}

export default EstadoEntrenamiento