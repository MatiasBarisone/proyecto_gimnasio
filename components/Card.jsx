import React from 'react'
import '../components/Card.css'


const Card = ({ description, backgroundImage}) => {
    return (
        
      <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <p className="card-description">{description}</p>
      </div>
      
    );
  };
export default Card