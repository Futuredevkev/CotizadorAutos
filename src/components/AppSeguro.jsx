import React from 'react'
import Formulario from './Formulario'
import useCotizador from '../hooks/useCotizador'
import Spiner from './Spiner'
import Resultado from './Resultado'

export default function AppSeguro() {

  const { cargando } = useCotizador()

  return (
    <>
        <heaader className="my-10">
            <h1 className='text-white text-center text-4xl font-black'>Cotizador de seguros de auto</h1>
        </heaader>

        <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
            <Formulario />

           {cargando ? <Spiner /> : <Resultado /> }
        </main>
    </>
  )
}
