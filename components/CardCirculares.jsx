// src/components/CardCirculares.jsx
import React from 'react';
import './CardCirculares.css';

const CardCirculares = ({ descripcion, backgroundImg }) => {
  return (
    <div className="circular-card" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="descripcion">{descripcion}</div>
    </div>
  );
};

export default CardCirculares;
