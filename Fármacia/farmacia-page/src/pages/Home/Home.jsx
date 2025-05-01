import './Home.css';
import { useState, useEffect } from 'react';


const Home = () => {

    const [visitas, setVisitas] = useState(0);
  
    useEffect(() => {

      const visitasSalvas = localStorage.getItem("visitas") || 0;
      const novasVisitas = parseInt(visitasSalvas) + 1;
  
      setVisitas(novasVisitas);
      localStorage.setItem("visitas", novasVisitas);
    }, []);

    return(

    <div className="container-home">
        <label className='label'>🎉 Você é o visitante número: {visitas}!</label>
        <div className="grid-item">
        <h1 className='h1'>Seja bem-vindo ao Farmácia!</h1>
        <p className='p'>Fique á vontade para conhecer os nossos serviços.</p>

        <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmllcHZ5MmxzdDA2a21hcm03dnE1aTRrcmo1dXJvcnNhd3dkdWgyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5L57f5fI3f2716NaJ3/giphy.gif"
        alt="Seja bem-vindo"
        className="gif-bemvindo"
        /> 
           
      </div>
    </div>
  );
};

export default Home;
