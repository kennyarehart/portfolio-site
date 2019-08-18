import React from 'react'
import './project-thumb.css'

function ProjectThumb(props) {
	return (
		<div className="container">
			<img src={props.src} className="" alt="" />
			<div className="overlay">
				<div className="text">
					<h4>{props.header}</h4>
					<p>{props.details}</p>
				</div>
			</div>
		</div>		
	)
}

export default ProjectThumb
