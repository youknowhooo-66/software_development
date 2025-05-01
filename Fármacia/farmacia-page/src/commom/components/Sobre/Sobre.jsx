import React from "react";
import "./Sobre.css";
import farmarciaplaca from "./images/farmarciaplaca.jpg";

const Sobre = () => {
  return (
    <div className="sobre-section">
    <div className="sobre-container">
       <img className="img" src={farmarciaplaca} alt="Farmácia" />
      <h1 className="sobre-title">Sobre Márcia Maria Mirenda</h1>
      
      <div className="sobre-section">
        <h2 className="sobre-subtitle">Informações Gerais</h2>
        <p className="sobre-text"><strong>Nome:</strong> Márcia Maria Mirenda</p>
        <p className="sobre-text"><strong>Idade:</strong> 32 anos</p>
        <p className="sobre-text">
          Márcia possui formação em administração de empresas, com uma paixão especial por empreendedorismo e design.
        </p>
      </div>
      
      <div className="sobre-section">
        <h2 className="sobre-subtitle">História</h2>
        <p className="sobre-text">
          Inspirada pelo sucesso de seu tio Mário, Márcia sempre valorizou o empreendedorismo.
          Depois de uma reviravolta em sua vida pessoal, ela decidiu transformar a farmácia do tio
          em um negócio moderno e inovador.
        </p>
      </div>
      
      <div className="sobre-section">
        <h2 className="sobre-subtitle">Inovação</h2>
        <p className="sobre-text">
          Para modernizar a farmácia, Márcia implementou tecnologia de gestão e lançou um
          programa digital de fidelidade, tornando a experiência do cliente mais eficiente e personalizada.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Sobre;
