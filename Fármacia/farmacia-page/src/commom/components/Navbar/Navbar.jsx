import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/home" className="navbar-link">Início</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/geradorsenha" className="navbar-link">Gerar Senha</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/pedirsenha" className="navbar-link">Pedir Atendimento</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/loja" className="navbar-link">Loja</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/sobre" className="navbar-link">Sobre</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;