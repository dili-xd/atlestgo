import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Footer.css"
function Footer() {
  return (
    <div className='footer-cont'>
        <h2>Página creada por Dilii☀️☀️</h2>
        <Link className='contacto' to={"/contacto"}>Contacto</Link>
    </div>
  )
}

export default Footer   