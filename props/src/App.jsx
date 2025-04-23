import { useEffect, useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function App() {
  const [produtos, setProdutos] = useState([]);
    const [cadastro, setCadastro] = useState({
      nome: "",
      preco: ""
    })

  useEffect(() => (
    console.log(produtos)
  ),[produtos]);
  
  function cadastrar(){
   
    let produto = {
        id: Date.now(),
        nome: cadastro.nome,
        preco: Number(cadastro.preco)
      }

    setProdutos([...produtos,produto])
  }

  return (
    <div className='container-app'>

      <div>
        <input value={cadastro.nome} onChange={(event) => setCadastro({...cadastro, nome: event.target.value})} placeholder='Nome do produto' type='text' />
        <input value={cadastro.preco} onChange={(event) => setCadastro({...cadastro, preco: event.target.value})} placeholder='Preço do produto' type='text' />
        <button onClick={cadastrar}>Cadastrar</button>
      </div>

      <div className='container-card'>
      {produtos.map((p) => (
        <Produto key={p.id} modelo={p.modelo} preco={p.preco} id={p.id} />
      ))}
      </div>
    </div>
  )
}

export default App

      {/* <Produto modelo={"Galaxy A15"} preco={809}/>
      <Produto modelo={`Smart TV 32" Full HD LED TCL`} preco={971.10}/>
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco} />
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco} />
      <Produto modelo={produtos[2].modelo} preco={produtos[2].preco}/> */}
      {/* {produtos.map((p, index)=>(
        <Produto key={index} modelo={p.modelo} preco={p.preco} />
      ))} */}