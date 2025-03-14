import React, { useState } from 'react'


function AnoBissexto() {
    const [resultado, setResultado] = useState('Resultado não calculado')

    function lerAno(){
        let ano = Number(prompt("Digite o ano: "))
        if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
            setResultado("É um ano bissexto")
        }else{setResultado("Não é bissexto")}
    }

    return(
        <div className='container-anoBissexto' >
            <h2>AnoBissexto</h2>

            <button onClick={lerAno}>Informar Ano</button>
            <p>
            {resultado}
            </p>
            
        </div>
    )

}

export default AnoBissexto;