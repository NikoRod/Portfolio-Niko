import React from 'react';

// STYLES
import "../styles/Inicio.scss";

// ICONS
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Inicio({ texts }) {

  const goWsp = () => {
    window.open('https://wa.me/21676041', '_blank');
  }

  const goLinkedin = () => {
    window.open('https://www.linkedin.com/in/nikolas-rodiguez/', '_blank');
  }

  const goGithub = () => {
    window.open('https://github.com/NikoRod', '_blank');
  }

  return (

  <div className='inicio-container'>

    <h1>Nikolas Rodríguez</h1>

    <p> <span>&lt;</span> Frontend developer <span>/&gt;</span>  </p>

    <div className="btn-container">

      <button className='contact-btn' onClick={goWsp}>{texts.contactBtn}</button>

      <div className="media">

        <button className='btn' id='wsp' onClick={goWsp}> <WhatsAppIcon fontSize='large' /> </button>
        <button className='btn' id='linked' onClick={goLinkedin}> <LinkedInIcon fontSize='large' /> </button>
        <button className='btn' id='git' onClick={goGithub}> <GitHubIcon fontSize='large' /> </button>

      </div>

    </div>

    <section id="bg">

      <ul id="shape">

        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        
      </ul>
      
    </section>

  </div>

  );
}
