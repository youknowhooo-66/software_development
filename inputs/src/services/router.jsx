import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import PainelOracao from "../pages/PainelOração/PainelOracao";

// Configuração das rotas

const router = createBrowserRouter([
    {
        path: "/", // Rota raiz
        element: <App />, // Componente principal
        children: [
            { path: "/", element: <PainelOracao /> }, // Subrota "home"
            { path: "*", element: <div>404 - Página não encontrada</div> }, // Rota para erro 404
        ],
    },
]);

export default router;