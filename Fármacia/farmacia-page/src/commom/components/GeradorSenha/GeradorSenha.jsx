import React, { useContext } from "react";
import { SenhaContext } from "../../../context/SenhaProvider";

import "./GeradorSenha.css"

function GeradorSenha() {
  const { gerarSenha } = useContext(SenhaContext);


  return (

    <div className="gerar-container" >
      <h1 className="h1">Sistema de Gestão de Senhas</h1>
      <div className="container-gerar">
  
      <div className="gerar-senha">
        <button className="gerar-button" onClick={() => gerarSenha("Normal")} style={{ marginRight: "10px" }}>
          Gerar Senha Normal
        </button>
        <button className="gerar-button" onClick={() => gerarSenha("Preferencial")}>
          Gerar Senha Preferencial
        </button>
      </div>
      </div>
      <img
        src="https://media.giphy.com/media/ypqHf6pQ5kQEg/giphy.gif?cid=ecf05e47uyq7d4feygesahpepq3eu7m5ou9uuv6n2x8rthl2&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="Seja bem-vindo"
        className="gif-bemvindo"
        />
    </div>
  );
}

export default GeradorSenha;
