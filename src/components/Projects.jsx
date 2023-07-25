import React from 'react';

// STYLES
import "../styles/Projects.scss";

// COMPONENTS
import ProjectCard from './ProjectCard';
import ExtraProjects from './ExtraProjects';

// IMAGES
import pokedex from "../../public/images/pokedexcap.jpg";
import meraki from '../../public/Images/merakicap.jpg';

export default function Project({ texts }) {

	const goPokedex = () => {
		window.open('https://nikorod.github.io/Pokedex-PokeApi/', '_blank');
	}

	const goMeraki = () => {
    window.open('https://meraki-sublimacion-b2a13.web.app/', '_blank');
  }

  return (

    <div className='projects-container'>

			<h1>{texts.projectsTitle}</h1>

			<div className="main-projects">

				<ProjectCard 
					img={pokedex}
					name="To Do List"
					desc={texts.projectDesc1}
					tech1="React"
					tech2="JavaScript"
					tech3="SASS"
					link={goPokedex}
				/>

				<ProjectCard 
					img={meraki}
					name="Meraki Diseños"
					desc={texts.projectDesc2}
					tech1="React"
					tech2="JavaScript"
					tech3="CSS"
					link={goMeraki}
				/>

			</div>

			<div className="extra-projects">

				<ExtraProjects />

			</div>



    </div>

  );
}
