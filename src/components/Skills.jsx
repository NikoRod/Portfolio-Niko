import React from 'react';

// STYLES
import "../styles/Skills.scss";

// IMAGES
import html from "../../public/images/html.svg";
import css from "../../public/images/css.svg";
import js from "../../public/images/js.svg";
import react from "../../public/images/react.svg";
import tailwind from "../../public/images/tailwind.svg";
import bootstrap from "../../public/images/bootstrap.svg";
import sass from "../../public/images/sass.svg";
import git from "../../public/images/git.svg";
import docker from "../../public/images/docker.svg";

export default function Skills({ texts }) {

  return (

    <div className='skills-container'>

      <h1>{texts.skills}</h1>

      <div className="primary-skills">

        <img src={html} alt="html logo" />
        <img src={css} alt="css logo" />
        <img src={js} alt="js logo" />
        <img src={react} alt="react logo" />
        <img src={tailwind} alt="tailwind logo" />
        <img src={sass} alt="sass logo" />
        <img src={bootstrap} alt="bootstrap logo" />
        <img src={git} alt="git logo" />
        <img src={docker} alt="docker logo" />

      </div>

    </div>

  );
}
