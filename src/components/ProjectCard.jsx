import React from 'react';

// STYLES
import "../styles/ProjectCard.scss";

export default function ProjectCard(props) {

  return (

    <div className="project-card">

			<img src={props.img} onClick={props.link}/>

			<div className="project-desc">

				<h1> {props.name} </h1>

				<p> {props.desc} </p>

				<div className="project-details">

					<p> {props.tech1} </p>
					<p> {props.tech2} </p>
					<p> {props.tech3} </p>

				</div>

			</div>

		</div>

  );
}
