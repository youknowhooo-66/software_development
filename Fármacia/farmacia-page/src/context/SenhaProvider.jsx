import React, { createContext, useState, useRef } from "react";

export const SenhaContext = createContext();

export const SenhaProvider = ({ children }) => {
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
      alert("A fila está vazia.");
      return;
    }

    const preferenciais = fila.filter((senha) => senha.tipo === "Preferencial");
    const normais = fila.filter((senha) => senha.tipo === "Normal");

    let senhaChamada = preferenciais.length > 0
      ? preferenciais.reduce((prev, curr) => (curr.numero < prev.numero ? curr : prev))
      : normais.reduce((prev, curr) => (curr.numero < prev.numero ? curr : prev));

    setFila((prevFila) => prevFila.filter((senha) => senha.numero !== senhaChamada.numero));
    setSenhaAtual(senhaChamada);
  };

  return (
    <SenhaContext.Provider value={{ fila, senhaAtual, gerarSenha, chamarSenha }}>
      {children}
    </SenhaContext.Provider>
  );

};