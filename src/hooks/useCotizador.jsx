import { useContext } from 'react'
import CotizadorContext from '../contexts/CotizadorProvider'

const useCotizador = () => {
    return useContext(CotizadorContext)
}

export default useCotizador