
import './App.css'
import AppSeguro from './components/AppSeguro'
import { CotizadorProvider } from './contexts/CotizadorProvider'

function App() {


  return (
    <CotizadorProvider>
      <AppSeguro/>
    </CotizadorProvider>
  )
}

export default App
