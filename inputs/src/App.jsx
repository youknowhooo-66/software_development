import { useState } from 'react'
import './App.css'

function App() {
 
  const[form, setForm] = useState({
    username: "",
    senha: ""
  });

  const emAtualizacao = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState)
  };
  
  const noEnviado = e => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

    // onChange={(event) => setForm(event.target.value)
  
  
  return (
    <form onSubmit={noEnviado}>
    <div className='container-app'>
      <h1>Log in</h1>
      <label htmlFor=''>Username</label>
      <input type='text'
      name='username'
      value={form.username}
      onChange={emAtualizacao}
      />
   
      <label htmlFor=''>Senha</label>
      <input type='text'
      name='senha'
      value={form.senha}
      onChange={emAtualizacao}
      />

      <div>
        <button type='submit'>Login</button>
      </ div>

    </div>
    </form>
  )
}
export default App;