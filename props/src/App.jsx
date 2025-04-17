import { useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function App() {
  const [produtos, setProdutos] = useState([
    {
      modelo:"Melancia",
      preco: 98
    },
    {
      modelo:"Pneu",
      preco: 78
    }
  ])

  function testar(){

  }

  return (
    <div className='container-app'>
      <Produto modelo={"Galaxy A15"} preco={809}/>
      <Produto modelo={`Smart TV 32" Full HD LED TCL`} preco={971.10}/>
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco} />
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco} />
      <button onClick={testar}>Testar</button>

      {produtos.map((p)=>(
        <Produto modelo={p.modelo} preco={p.preco} />
      ))}
    </div>
  )
}

export default App
