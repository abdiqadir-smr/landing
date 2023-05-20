import React from 'react';
import './feature.css';

const Feature = ({iconUrl,title,text}) => {
  return (
        <div className="lpg__undraw-feature-icons">
            <img src={iconUrl} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
  )
}

export default Feature