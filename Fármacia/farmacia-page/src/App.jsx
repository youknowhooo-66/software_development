import { Outlet } from 'react-router-dom'
import { SenhaProvider } from "./context/SenhaProvider";
import './App.css'
import Footer from './commom/components/Footer/Footer'
import Header from './commom/components/Header/Header'

function App() {

  return (
    <>
        <SenhaProvider>
    <Header/>
    <Outlet />
    <Footer />
        </SenhaProvider>
    </>
  )
}

export default App
