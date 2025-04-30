import Navbar from "../Navbar/Navbar";
import "./Header.css";
import React from "react";

const Header = () => {
 
    return (
        <header className="cabecalho_root">
            <img src="../public/images/farmarcia.webp" height={260} />
            {/* <h1 className="cabecalho-title">WELCOME!</h1> */}
            <Navbar />
        </header>
    );
}
export default Header;