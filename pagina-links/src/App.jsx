import './App.css'
import { FaGithubSquare } from "react-icons/fa";
import Linkedin from './components/Linkedin';
function App() {

  return (
    <div className='container-app'>
      <h1>Links do meu S2</h1>

      <a href="https://github.com/rafaellindemann" className='links' target='_blank'>
        <FaGithubSquare />
        Github
        <FaGithubSquare />
      </a>

      <Linkedin />

    </div>
  )
}

export default App
