import React from 'react'
import './project-thumb.css'
import { SiteIconButton } from '../icon-button'
import { Link } from 'react-router-dom'
import { getCaseStudyLink } from '../../lib/links'

function ProjectThumb(props) {
	const style = {
		background: props.data.color
	}

	return (
		<div className="container" style={style}>
			<Link to={getCaseStudyLink(props.data.route)}>
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
						<div className="links">
							<SiteIconButton alt="casestudy" text="Case Study" />
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default ProjectThumb
