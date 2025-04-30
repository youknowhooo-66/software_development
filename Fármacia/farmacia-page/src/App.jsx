import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './commom/components/Footer/Footer'
import Header from './commom/components/Header/Header'

function App() {

  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default App
