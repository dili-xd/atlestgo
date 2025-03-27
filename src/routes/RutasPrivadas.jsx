import React from 'react'

function RutasPrivadas({children}) {
    function obtenerUsuario() {
        const usuario = localStorage.getItem("idUsuario")
        const admin = localStorage.getItem("admin")
        
        if(usuario){
            return true
        }else{
         
        }

        if(admin){
            return true
        }else{
            return false
        }
    }


  return (
    obtenerUsuario() ? children : <h1>NO PUEDE VER LA PÁGINA</h1>
  )
}

export default RutasPrivadas