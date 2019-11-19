import React from 'react'
import { ReactComponent as IconSite } from '../../assets/images/icon_site.svg'
import IconSvg from '../icon-svg'
import { Link } from 'react-router-dom'
import { getCaseStudyLink } from '../../lib/links'

function CaseStudyIconButton(props) {
	return (
		<Link to={getCaseStudyLink(props.route)} className="icon-btn">
			<IconSvg Icon={IconSite} {...props} />
		</Link>
	)
}

export default CaseStudyIconButton
