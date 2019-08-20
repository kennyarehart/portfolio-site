import React from 'react'
import './project-thumb.css'
import Anchor from '../react-a'
import { GithubIconButton, SiteIconButton } from '../icon-button'

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
						{props.data.links.map((item, i) => {
							if (item.github) {
								return <GithubIconButton href={item.github} key={i} alt={item.title} text={item.title} />
							} else {
								return <SiteIconButton href={item.site} key={i} alt={item.title} text={item.title} />
							}
						})}
					</div>
				</div>
			</div>
		</div>		
	)
}

export default ProjectThumb
