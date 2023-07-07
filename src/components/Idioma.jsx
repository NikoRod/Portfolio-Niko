import React, { useState }from 'react';

// STYLES
import "../styles/Idioma.scss";

// ICONS
import { US, ES } from 'country-flag-icons/react/3x2'

export default function Idioma({ texts, handleLanguage }) {

  return (

    <>

      <div className="radio-container">
 
        <input type="radio" name="lang" value="es" onClick={handleLanguage} />
        <input type="radio" name="lang" value="en" onClick={handleLanguage} />

      </div>
    
      <div className='idioma-container'>
        
        <ES className="es" />
        <US className="en" />

      </div>
    
    </>

  );
}
