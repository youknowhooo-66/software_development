import React from "react";
import "./Loja.css";

import produto1 from "./images/Produto1.jpg";
import produto2 from "./images/Produto2.jpg";
import produto3 from "./images/Produto3.jpg";

function Loja() {
  const produtos = [
    { id: 1, nome: "Camisetas infantis", imagem: produto1, preco: "R$ 19,90" },
    { id: 2, nome: "Camisetas M-G-XG", imagem: produto2, preco: "R$ 29,90" },
    { id: 3, nome: "Cartões de Presentes", imagem: produto3, preco: "R$ 39,90" },
  ];

  return (
    <div className="container">
      <h1>🛍 Nossa Loja</h1>
      <div className="produtoGrid">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto">
            <img src={produto.imagem} alt={produto.nome} className="imagem" />
            <h3>{produto.nome}</h3>
            <p>{produto.preco}</p>
            <button className="botao">Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loja;

