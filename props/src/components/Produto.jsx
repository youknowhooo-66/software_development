import React from "react";
import "./Produto.css"

function Produto(props) {
    return (
        <div className="container-produto">
        <h2>{props.nome}</h2>
        <p>R${props.preco}</p>
        <p>{props.id}</p>
        </div>
    
    )
}
export default Produto;
// .toFixed(2).replace('.',',')}