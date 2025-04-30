import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";
import GeradorSenha from "../components/GeradorSenha/GeradorSenha";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "home", element: <Home /> },
            { path: "geradorsenha", element: <GeradorSenha /> },
            { path: "*", element: <div>404 - Página não encontrada</div> },
        ],
    },
]);

export default Router;