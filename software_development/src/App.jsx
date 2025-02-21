import { useState } from 'react'
import './App.css'

function App() {
  
  const [usuario, setUsuario] = useState('')
 
  let nome = 'lçsambamb'
  function lerNome(){
    nome = prompt('Digite o nome (vou ignorar):')
    console.log(nome)
  }
  function lerUsuario(){
    let resposta = prompt('Digite novo usuário:')
    setUsuario(resposta)
  }
  
  return (
  <>
  <h1>ESTADOS</h1>
    <div>
    Nome: {nome}
    </div>
    <div>
    Usuario: {usuario}
    </div>

    <button onClick={lerNome}>Trocar nome</button>
    <button onClick={lerUsuario}>Trocar usuario</button>

    <ul>
      <li>taperaba</li>
      <li>taperaba</li>
      <li>taperaba</li>
      <li>taperaba</li>
      <li>taperaba</li>
      <li>taperaba</li>
    </ul>
  </>
  )
}
export default App;