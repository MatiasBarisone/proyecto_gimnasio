// src/components/Header.jsx
import React from 'react';
import '../components/Header.css'; // Importa un archivo CSS si deseas estilos personalizados
import logo from '/images/logo.png';



const Header = () => {
  return (
    <header className="header" >
       <a href="/"> {/* Enlace que apunta a la raíz */}
        <img src={logo} alt="Logo de FitLife" className="logo" />
      </a> 
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
