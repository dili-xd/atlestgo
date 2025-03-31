import React, { useEffect, useState } from 'react'
import { getInfo } from '../services/fetch'
import ListaCards from '../components/ListaCards'
import Navbar from '../components/Navbar'

import CardEntreno from '../components/CardEntreno'
import EstadoEntrenamiento from '../components/EstadoEntrenamiento'
import ModalC from '../components/ModalC'
import Footer from '../components/Footer'
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

        <ListaCards lista={entrenamientos} />


      <Footer/>
    </>
  )
}

export default Home