import React from 'react'
import './project-thumb.css'
import Anchor from '../react-a'

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
						{props.data.details.map((item, i) => <li key={i}>{item}</li>)}
					</ul>
					<div className="links">
						{props.data.links.map((item, i) => <Anchor href={item.url} key={i}>{item.title}</Anchor>)}
					</div>
				</div>
			</div>
		</div>		
	)
}

export default ProjectThumb
