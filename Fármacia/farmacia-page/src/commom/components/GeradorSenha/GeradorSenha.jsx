import React, { useState, useRef } from "react";
import "./GeradorSenha.css"

function GeradorSenha() {

  const [fila, setFila] = useState([]);
  const [senhaAtual, setSenhaAtual] = useState(null);
  

  const contadorRef = useRef(1);

  const gerarSenha = (tipo) => {
    const numero = contadorRef.current++;
    const novaSenha = { numero, tipo };
    setFila((prevFila) => [...prevFila, novaSenha]);
  };


  const chamarSenha = () => {
    if (fila.length === 0) {

      alert("A fila está vazia. Não há senhas para chamar.");
      return;
    }

    const preferenciais = fila.filter((senha) => senha.tipo === "Preferencial");
    const normais = fila.filter((senha) => senha.tipo === "Normal");

    let senhaChamada = null;
    if (preferenciais.length > 0) {

      senhaChamada = preferenciais.reduce((prev, curr) =>
        curr.numero < prev.numero ? curr : prev
      );
    } else if (normais.length > 0) {
   
      senhaChamada = normais.reduce((prev, curr) =>
        curr.numero < prev.numero ? curr : prev
      );
    }

    setFila((prevFila) =>
      prevFila.filter((senha) => senha.numero !== senhaChamada.numero)
    );
    setSenhaAtual(senhaChamada);
  };

  return (
    <div className="gerar-container" >
      
      <h1 className="h1">Sistema de Gestão de Senhas</h1>
      
      <div className="gerar-senha">
        <button className="gerar-button" onClick={() => gerarSenha("Normal")} style={{ marginRight: "10px" }}>
          Gerar Senha Normal
        </button>
        <button className="gerar-button" onClick={() => gerarSenha("Preferencial")}>
          Gerar Senha Preferencial
        </button>
      </div>
      
      <div className="gerar-chamar"  >
        <button className="gerar-button" onClick={chamarSenha} disabled={fila.length === 0}>
          Chamar Senha
        </button>
      </div>
      
      <div className="gerar-chamar" >
        {fila.length === 0 ? (
          <p>A fila está vazia.</p>
        ) : (
          <p>Há {fila.length} senha(s) aguardando atendimento.</p>
        )}
      </div>
      
      <div className="gerar-senha" >
        <h2>Senha Chamada:</h2>
        <p>
          {senhaAtual
            ? `${senhaAtual.tipo} ${senhaAtual.numero}`
            : "Nenhuma senha foi chamada"}
        </p>
      </div>
    </div>
  );
}

export default GeradorSenha;
