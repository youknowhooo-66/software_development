import { useState } from "react"
function Aviso() {
   
    const[avisar,setAvisar] = useState(false)
    
    function ToggleAviso(){
        setAvisar(!avisar)
    }
    
    
    return (
    <div>
        {/* {avisar && <p>apareceu!!</p>} */}
        {avisar && <p>
        Aviso importante, relevante que vale a epna a utilização desta div afim de contribuir para o preenchimento de conteudo no site
        </p>}
        <button onClick={ToggleAviso} >Aviso</button>
        
        
    </div>
    )
  }

export default Aviso