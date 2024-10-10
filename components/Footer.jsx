// src/components/Footer.jsx
import React from 'react';
import '../components/Footer.css'; // Asegúrate de que este archivo exista
import whatsappLogo from '/images/whalogo.png'; // Ajusta la ruta según tu estructura de carpetas

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
          <img src={whatsappLogo} alt="Contactar por WhatsApp" className="whatsapp-logo" />
        </a>
        <p>Contactanos para mas información!</p>
        <p>© 2024 Matias Barisone. Todos los derechos reservados.</p> 
        
      </div>
      
    </footer>
    
  );
};

export default Footer;
