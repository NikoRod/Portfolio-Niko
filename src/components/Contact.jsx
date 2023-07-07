import React from 'react';

// STYLES
import "../styles/Contact.scss";

// ICONS
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Conctact({ texts }) {

  const goWsp = () => {
    window.open('https://wa.me/21676041', '_blank');
  }

  const goLinkedin = () => {
    window.open('https://www.linkedin.com/in/nikolas-rodiguez/', '_blank');
  }

  return (

    <div className='contact-container'>

      <h1>{texts.contact}</h1>

			<div className="contact-icons">

				<MailOutlineIcon className='icon' fontSize='large' onClick={goWsp} />
				
				<WhatsAppIcon className='icon' fontSize='large' onClick={goWsp} />

				<LinkedInIcon className='icon' fontSize='large' onClick={goLinkedin} />

			</div>

    </div>

  );
}
