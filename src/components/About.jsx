import React from 'react';
import cv from "../../public/cv.pdf";

// STYLES
import "../styles/About.scss";

// ICONS
import DownloadIcon from '@mui/icons-material/Download';

export default function About({ texts }) {

  return (

    <div className='about-container'>

      <h1>{texts.aboutMeTitle}</h1>

      <p> {texts.aboutMe1} <br /><br /> {texts.aboutMe2} </p>

      <a href={cv} download className='cv-btn'>{texts.CV}<DownloadIcon className='dw' fontSize='large' /> </a>

    </div>

  );
}
