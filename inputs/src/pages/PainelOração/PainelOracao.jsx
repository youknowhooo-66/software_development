import { useState } from "react";
import "./PainelOracao.css";

function PainelOracao() {
    
    const[oracao,setOracao] = useState('')   
    
    function DesenvolvedorWeb(){
        <p>
            Divino Stack Overflow, que estais na nuvem,

Santificado seja o nosso deploy.

Venha a nós o CSS alinhado,

Seja feita a responsividade,

Assim no Chrome como no Firefox.

O código nosso de cada dia nos dai hoje,

Perdoai os nossos console.log,

Assim como nós perdoamos os commits sem mensagem.

Não nos deixei cair em callback hell,

Mas livrai-nos dos bugs de produção.

Amém, amém, git commit -m "Aleluia".
        </p>
    }
    
    return (
        <div>
            <button onChange={DesenvolvedorWeb}>Oração</button>
        </div>
    )

}
export default PainelOracao