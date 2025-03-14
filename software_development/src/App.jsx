import './App.css'
import AnoBissexto from './components/AnoBissexto'
import Aviso from './components/Aviso'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
// import ConversorTemperatura from './components/ConversorTemp'
import Estados from './components/Estados'
import TrajetoPomar from './components/TrajetoPomar'

function App() {

  return (
    <>
      <TrajetoPomar />
      <AnoBissexto />
      <Aviso />
      <Conversao2 />
      <Conversao />
      <Estados />
      {/* <ConversorTemperatura /> */}
    </>
  )
}

export default App