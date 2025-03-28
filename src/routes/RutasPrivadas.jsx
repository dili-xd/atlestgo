import React from 'react'
import Admin from '../pages/Admin'

function RutasPrivadas({children}) {
    function obtenerUsuario() {
        const usuario = localStorage.getItem("idUsuario")
        const admin = localStorage.getItem("admin")
        if(usuario){
            return true
        }
    }
  return (
    obtenerUsuario() ? children : <h1>NO PUEDE VER LA PÁGINA</h1>
    
  )
}

export default RutasPrivadas