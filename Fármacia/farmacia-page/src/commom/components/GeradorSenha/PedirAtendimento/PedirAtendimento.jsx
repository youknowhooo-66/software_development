import "./PedirAtendimento.css";
import React from "react";
import { SenhaContext } from "../../../../context/SenhaProvider";
import { useContext } from "react";

function PedirAtendimento() {
  const { fila, senhaAtual, chamarSenha } = useContext(SenhaContext);

  return (
    <div className="container-chamar">
      <div className="chamar-container">
      <div className="gerar-chamar">
        <button className="gerar-button" onClick={chamarSenha} disabled={fila.length === 0}>
          Chamar Senha
        </button>
      </div>
      <div className="gerar-chamar">
        {fila.length === 0 ? <p>A fila está vazia.</p> : <p>Há {fila.length} senha(s) aguardando atendimento.</p>}
      </div>

      <div className="gerar-senha">
        <h2>Senha Chamada:</h2>
        <p>{senhaAtual ? `${senhaAtual.tipo} ${senhaAtual.numero}` : "Nenhuma senha foi chamada"}</p>
      </div>
      </div>
      </div>
  );
}
  export default PedirAtendimento;