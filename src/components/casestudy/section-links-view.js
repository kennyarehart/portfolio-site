import React from 'react'
import { ProjectThumbLinks } from '../project-thumb'

function CaseStudySectionLinks(props) {
	return (
		<div className="section">
			<ProjectThumbLinks {...props} colors={['#114867', '#ffffff']} />
		</div>
	)
}

export default CaseStudySectionLinks
