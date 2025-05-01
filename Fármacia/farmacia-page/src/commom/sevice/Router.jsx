import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import GeradorSenha from "../components/GeradorSenha/GeradorSenha";
import Home from "../../pages/Home/Home";
import PedirAtendimento from "../components/GeradorSenha/PedirAtendimento/PedirAtendimento";
import Loja from "../components/Loja/Loja";
import Sobre from "../components/Sobre/Sobre";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "home", element: <Home />},
            { path: "geradorsenha", element: <GeradorSenha /> },
            { path: "pedirsenha", element: <PedirAtendimento /> },
            { path: "loja", element: <Loja />},
            { path: "sobre", element: <Sobre />},
            { path: "*", element: <div>404 - Página não encontrada</div> },
        ],
    },
]);

export default Router;