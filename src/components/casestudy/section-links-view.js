import React from 'react'
import { ProjectThumbLinks } from '../project-thumb'
import { iconColors } from '../../lib/utils.js'

function CaseStudySectionLinks(props) {
	return (
		<div className="section">
			<ProjectThumbLinks {...props} colors={iconColors.overBlue} />
		</div>
	)
}

export default CaseStudySectionLinks
