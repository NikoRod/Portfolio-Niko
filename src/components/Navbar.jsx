import React, { useState } from 'react';

// STYLES
import "../styles/Navbar.scss";

// ICONS
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BuildIcon from '@mui/icons-material/Build';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

export default function Navbar() {

//	NAVBAR DISPLAY FUNCTION
	const [navbar, setNavbar] = useState(false);

	const displayNavbar = () => {
    setNavbar(!navbar);
  }

	// NAVIGATION FUNCTIONS
	const home = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
		setNavbar(!navbar);
  }

	const about = () => {
    window.scroll({
      top: 650,
      behavior: 'smooth'
    });
		setNavbar(!navbar);
  }

	const projects = () => {
    window.scroll({
      top: 1400,
      behavior: 'smooth'
    });
		setNavbar(!navbar);
  }

	const skills = () => {
    window.scroll({
      top: 2650,
      behavior: 'smooth'
    });
		setNavbar(!navbar);
  }

	const contact = () => {
    window.scroll({
      top: 9999,
      behavior: 'smooth'
    });
		setNavbar(!navbar);
  }


  return (

	<>
		
		<div className="toggle-btn">
			<button onClick={displayNavbar}> <MoreHorizIcon className='more-icon' /> </button>
		</div>

		<div className={navbar ? "navbar-container open" : "navbar-container"}>

			<li><a onClick={home}> <HomeIcon className='option-icon' /> </a></li>
			<li><a onClick={about}> <PersonIcon className='option-icon' /> </a></li>
			<li><a onClick={projects}> <BusinessCenterIcon className='option-icon' /> </a></li>
			<li><a onClick={skills}> <BuildIcon className='option-icon' /> </a></li>
			<li><a onClick={contact}> <SmartphoneIcon className='option-icon' /> </a></li>

		</div>
		
	</>

  );
}
