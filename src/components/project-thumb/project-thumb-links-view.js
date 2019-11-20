import React from 'react'
import { GithubIconButton, SiteIconButton, CaseStudyIconButton } from '../icon-button'
import './project-thumb-links.scss'

function ProjectThumbLinks(props) {
	return (
		<div className="links">
			{props.data.links.map((item, i) => {
				const baseProps = {
					key: i,
					alt: item.title,
					text: item.title
				}
				if (item.route) {
					return <CaseStudyIconButton route={item.route} {...baseProps} {...props} />
				} else if (item.github) {
					return <GithubIconButton href={item.github} {...baseProps} {...props} />
				} else {
					return <SiteIconButton href={item.site} target="_blank" {...baseProps} {...props} />
				}
			})}
		</div>
	)
}

export default ProjectThumbLinks
