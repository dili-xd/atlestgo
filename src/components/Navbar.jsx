import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='cont-titulo'>
        <h1 className='titulo'>Atletsgo</h1>
      <Link className='enlaceAyuda' to={"/Ayuda"}>Ayuda</Link>
      <hr />
     
      </div>
    </>
  )
}

export default Navbar