import React, { useEffect, useState } from 'react'
import { getInfo } from '../services/fetch'
import ListaCards from '../components/ListaCards'
import Navbar from '../components/Navbar'
import CardEntreno from '../components/CardEntreno'
import EstadoEntrenamiento from '../components/EstadoEntrenamiento'

function Home() {
    const [entrenamientos,setEntrenamientos] =useState([])

    useEffect(()=>{
        async function traerEntrenamientos() {
            const entrenos = await getInfo("entrenos")
            setEntrenamientos(entrenos)
        }
        traerEntrenamientos()
    },[])

  return (
    <>
     <Navbar/>  

        <ListaCards lista={entrenamientos}/>
        <EstadoEntrenamiento/>

    </>
  )
}

export default Home