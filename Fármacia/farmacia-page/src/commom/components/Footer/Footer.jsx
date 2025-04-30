import "./Footer.css";

function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="rodape_root">
            <h6>
            Copyright © {anoAtual} - Todos os direitos
            reservados.
            </h6>
        </footer>
    );
}

export default Footer;