import React from 'react'
import './project-thumb.css'
import Anchor from '../react-a'

function ProjectThumb(props) {
	const style = {
		background: props.data.color
	}

	return (
		<Anchor className="container" style={style} href={props.data.url}>
			<div className="image-container">
				<img src={props.data.src} className="" alt="" />
			</div>
			<div className="overlay">
				<div className="text">
					<h4>{props.data.header}</h4>
					<p className="desc">{props.data.description}</p>
					<p>{props.data.details}</p>
				</div>
			</div>
		</Anchor>		
	)
}

export default ProjectThumb
