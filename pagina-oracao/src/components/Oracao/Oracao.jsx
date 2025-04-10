import { useState } from "react"
import "./Oracao.css"
function Oracao() {

    const [oracaoDW, setOracaoDW] = useState(false)
    const [oracaoFE, setOracaoFE] = useState(false)
    const [oracaoBE, setOracaoBE] = useState(false)
    const [oracaoFS, setOracaoFS] = useState(false)
    const [oracaoDP, setOracaoDP] = useState(false)
    const [oracaoPG, setOracaoPG] = useState(false)
    const [oracaoET, setOracaoET] = useState(false)
    const [oracaoRS, setOracaoRS] = useState(false)
    const [oracaoAP, setOracaoAP] = useState(false)
    const [oracaoDC, setOracaoDC] = useState(false)


    function OracaoDW() {
        setOracaoDW(!oracaoDW)
    }
    function OracaoFE() {
        setOracaoFE(!oracaoFE)
    }
    function OracaoBE() {
        setOracaoBE(!oracaoBE)
    }
    function OracaoFS() {
        setOracaoFS(!oracaoFS)
    }
    function OracaoDP() {
        setOracaoDP(!oracaoDP)
    }
    function OracaoPG() {
        setOracaoPG(!oracaoPG)
    }
    function OracaoET() {
        setOracaoET(!oracaoET)
    }
    function OracaoRS() {
        setOracaoRS(!oracaoRS)
    }
    function OracaoAP() {
        setOracaoAP(!oracaoAP)
    }
    function OracaoDC() {
        setOracaoDC(!oracaoDC)
    }

<button onClick={() => setMostrarBotoes(!mostrarBotoes)}>
        Toggle Botões
      </button>

    return (
        <div id="container">

            <div id="button">
            <button onClick={OracaoDW}>Oração do desenvolvedor Web</button>
            <button onClick={OracaoFE}>Oração do Frontend</button>
            <button onClick={OracaoBE}>Oração do Backend</button>
            <button onClick={OracaoFS}>Oração do Fullstack</button>
            <button onClick={OracaoDP}>Oração do Deploy</button>
            <button onClick={OracaoPG}>Oração do Progamador</button>
            <button onClick={OracaoET}>Oração do Estudante</button>
            <button onClick={OracaoRS}>Oração do Resiliente</button>
            <button onClick={OracaoAP}>Oração do Aprendiz</button>
            <button onClick={OracaoDC}>Oração do #devCansado</button>
            </div>

            <div id="oracoes">
            {oracaoDW && <label className="label">
                Divino Stack Overflow, que estais na nuvem, Santificado seja o nosso deploy. Venha a nós o CSS alinhado, Seja feita a responsividade, Assim no Chrome como no Firefox. O código nosso de cada dia nos dai hoje, Perdoai os nossos console.log, Assim como nós perdoamos os commits sem mensagem. Não nos deixei cair em callback hell, Mas livrai-nos dos bugs de produção. Amém, amém, git commit -m "Aleluia".
            </label>}
    
            {oracaoFE && <label className="label">
               Ave CSS, cheia de bugs, O framework é convosco, Bendita sois vós entre as telas, E bendito é o fruto do vosso DOM: o pixel perfeito. Santa Documentação, mãe da UI, Rogai por nós, devs visuais, Agora e na hora do push final. Hover.
            </label>}

            {oracaoBE && <label className="label">
                Nosso código que está no servidor,
Santificado seja o teu endpoint,
Venha a nós o teu JSON,
Seja feita tua lógica,
Assim na API como no banco.
O token nosso de cada dia nos dai hoje,
Perdoai nossas queries mal otimizadas,
Assim como nós perdoamos quem nos envia POST sem body.
E não nos deixes cair em loops infinitos,
Mas livrai-nos do downtime.
Amém, amém, status 200.
            </label>}

            {oracaoFS && <label className="label">
                Senhor Git, dai-me forças para subir a branch certa,
Coragem para lidar com o merge,
E sabedoria para entender o código que eu mesmo escrevi ontem.
Concedei-me domínio sobre o front, o back, e o café.
Protegei minha stack das atualizações quebradoras,
E dai-me fé nos testes automatizados.
Pois teu é o commit,
O build e a glória do log,
Agora e para sempre,
`npm run dev`.
            </label>}


            {oracaoDP && <label className="label">
                Creio em um único ambiente,
Prod, todo-poderoso,
Criador do stress e da glória.
Creio no CI/CD,
Filho único do DevOps,
Que foi concebido pelo merge,
Nasceu da pipeline,
Sofreu sob erro 500,
Foi testado, caiu e voltou no rollback.
Subiu ao GitHub,
Está sentado ao lado do log de produção,
Donde há de vir julgar nosso push e nossos testes.
Creio no auto-scaling,
Na compressão de imagens,
Na minificação dos scripts,
Na ressurreição do build,
E na vida eterna do uptime.
**Amém e F5.**
            </label>}


            {oracaoPG && <label className="label">
               AO Senhor é meu debug, nada me faltará.
Em loops tranquilos me faz deitar,
e me guia pelas threads seguras da lógica.
Ainda que eu ande pelo vale dos sistemas legados,
não temerei o código antigo,
poiS tu estás comigo:
tua stack e teu terminal me consolam.
Preparas um café diante de mim
na presença dos meus erros.
Unge minha cabeça com boas práticas,
e o meu Git transborda.
Certamente a sintaxe limpa e o deploy estável
me seguirão todos os commits da minha vida,
e habitarei no repositório sagrado para todo o sempre.
**Ctrl + S. Amém.**
            </label>}


            {oracaoET && <label className="label">
                Senhor dos Códigos,
Concede-me memória RAM e memória humana.
Faze com que os bugs da aula não se repliquem na minha cabeça,
e que o VS Code não trave quando eu mais precisar.
Livrai-me das provas de múltipla escolha com alternativas parecidas,
dos professores que trocam tudo na véspera,
e dos colegas que sabem colar melhor do que estudar.
Dai-me coragem para levantar a mão,
e sabedoria para não deletar a pasta errada.
**Amém, compila.**
            </label>}


            {oracaoRS && <label className="label">
                Concedei-me, Senhor,
a força para lidar com o código que não entendo,
a paciência para revisar o que já revi mil vezes,
e a coragem para recomeçar quando tudo dá errado.
Que eu aceite os bugs que não posso evitar,
corrija os que posso,
e tenha sabedoria para não quebrar o que já está funcionando.
Pois na vida e na programação,
quem cai sete vezes, levanta com `git stash`.
**Stack Overflow seja louvado.**
            </label>}


            {oracaoAP && <label className="label">
                Oh Grande Sintaxe,
que tudo vê e tudo espera,
ensinai-me a diferença entre `==` e `===`,
entre `let`, `var`, e `const`,
entre o que parece funcionar
e o que realmente funciona.
Dai-me humildade para perguntar,
curiosidade para explorar,
e persistência para continuar
quando tudo der `undefined`.
Pois estou apenas começando,
mas já sou parte do repositório da evolução.
**Commit inicial. Amém.**
            </label>}


            {oracaoDC && <label className="label">
                Senhor dos Logs,
Que tudo vê, até os erros que escondo com `try/catch`,
Dai-me forças, pois a minha está em `null`.
Não peço mais produtividade,
Só paz no coração e um código que pare de quebrar.
Já não distingo mais tab de espaço,
E até o botão de salvar me julga em silêncio.
Livrai-me das daily às 8h,
dos clientes que “só queriam um botãozinho a mais”,
e dos bugs que somem quando eu compartilho a tela.
Fazei meu código rodar, mesmo que por pena.
E se não rodar, que pelo menos pare de rodar minha cabeça.
Se eu dormir sobre o teclado,
que os sonhos me levem para um lugar sem deadlines,
sem hotfix,
sem SLA.
**Amém, e se puder, só mais 5 minutinhos.**
            </label>}

            </div>
        </div>
    )
}

export default Oracao;