import { useState } from 'react';

// STYLES
import './App.css';

// COMPONENTS
import Inicio from './components/Inicio';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Idioma from './components/Idioma';

// FUNCTIONS
const initialLanguage = "es";

const translation = {
  es:{
    contactBtn: "Contactame",
    aboutMeTitle: "Sobre mí",
    aboutMe1: "Soy un frontend developer, apasionado por darle vida a todo tipo de diseños destinados para la web. Trabajo principalmente con el entorno de React.",
    aboutMe2: "También estudido Ingeniería en Electrónica, siendo un entusiasta de la Robótica, la IA y la tecnología en general.",
    CV: "Descargar CV",
    projectsTitle: "Proyectos",
    projectDesc1: "Pokédex consumiendo la API de PokeApi. Desarollada con React + Vite y SASS.",
    projectDesc2: "Proyecto desarrollado de manera freelance para una tienda de sublimación y textiles real. Desarrollado con React, ReactRouter, JS y CSS.",
    more: "Más proyectos",
    skills: "Skills",
    contact: "Contacto",
  },

  en:{
    contactBtn: "Contact me",
    aboutMeTitle: "About me",
    aboutMe1: "I'm a Frontend developer, passionate about bringing to life all kinds of desing for the web. I work with the React enviroment.",
    aboutMe2: "I also study Electronic Engineering, being an enthusiast of robotics, AI and technology.",
    CV: "Download CV",
    projectsTitle: "Proyects",
    projectDesc1: "Pokedex consuming the API from PokeAPI. Developed with React & SASS.",
    projectDesc2: "Freelance proyect for a real textile and sublimation shop. Developed with React, ReactRouter, JS & CSS.",
    moreProjects: "More proyects",
    skills: "Skills",
    contact: "Contact",
  },
}

function App() {

  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translation[language]);

  const handleLanguage = (e) => {
    if(e.target.value === "es") {
      setLanguage("es");
      setTexts(translation.es);
    } else {
      setLanguage("en");
      setTexts(translation.en);
    }
  };

  return (

    <>

      <Idioma handleLanguage={handleLanguage} />

      <Navbar />
      
      <Inicio texts={texts} />

      <About texts={texts} />

      <Projects texts={texts} />

      <Skills texts={texts} />

      <Contact texts={texts} />


    </>

  );
}

export default App
