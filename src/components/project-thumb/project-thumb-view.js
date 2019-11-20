import React from 'react'
import './project-thumb.scss'
import ProjectThumbLinks from './project-thumb-links-view'

function ProjectThumb(props) {
	const style = {
		background: props.data.color
	}

	return (
		<div className="container" style={style}>
			<div className="image-container">
				<img src={props.data.src} className="" alt="" />
			</div>
			<div className="overlay">
				<div className="text">
					<h2>{props.data.header}</h2>
					<p className="sub">{props.data.sub}</p>
					<h3 className="desc">{props.data.description}</h3>
					<ul>
						{props.data.details.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
					<ProjectThumbLinks {...props} />
				</div>
			</div>
		</div>
	)
}

export default ProjectThumb
