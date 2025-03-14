import { useState } from "react"
import "./TrajetoPomar.css"

function TrajetoPomar(){
    
    const[resultado, setResultado] = useState('Nem um informação adicionada')
 
function compra(){
    let maça = 1.5; let laranja = 2.0; let bergamota = 1.0; let banana = 1.2; let pera = 0.5; let quantidade; let total;
    
    
    
    const produto = Number(prompt("Escolha uma fruta:" + "\n" + "1)Maçã" + "\n" + "2)Laranja" + "\n" + "3)Bergamota" + "\n" + "4)Banana" + "\n" + "5)Pera"))
    
    switch(produto){
        case 1:
            quantidade = prompt("Digite a quantidade: ")
            total = quantidade * maça
            setResultado("A quantidade a ser paga pelas Maçãs é: R$" + total)
            break
        case 2:
            quantidade = prompt("Digite a quantidade: ")
            total = quantidade * laranja
            setResultado("A quantidade a ser paga pelas Laranjas é: R$" + total)
            break
        case 3:
            quantidade = prompt("Digite a quantidade: ")
            total = quantidade * bergamota
            setResultado("A quantidade a ser paga pelas Bergamotas é: R$" + total)
            break
        case 4:
            quantidade = prompt("Digite a quantidade: ")
            total = quantidade * banana
            setResultado("A quantidade a ser paga pelas Bananas é: R$" + total)
            break
        case 5:
            quantidade = prompt("Digite a quantidade: ")
            total = quantidade * pera
            setResultado("A quantidade a ser paga pelas Peras é: R$" + total)
            break
    }
}
    
    return(
        <>

        <button onClick={compra}>Comprar no TrajetoPomar</button>
        <p>
            {resultado}
        </p>
        </>
    )

}

export default TrajetoPomar;