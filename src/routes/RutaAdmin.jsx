import React from 'react'

function RutaAdmin({children}) {
    function obtenerAdmin() {
        const admin = localStorage.getItem("admin")
        if(admin){
            return true
        }
    }
    return (
        obtenerAdmin() ? children : <h1>NO PUEDE VER LA PÁGINA</h1>

  )
}

export default RutaAdmin