import React from 'react'
import { ReactComponent as IconLinkedin } from '../../assets/images/icon_linkedin.svg'
import IconSvg from '../icon-svg'
import { AnchorBlank } from '../react-a'

function LinkedInIconButton(props) {
	return (
		<AnchorBlank href="https://www.linkedin.com/in/kennyarehart/" alt="Connect on LinkedIn" className="icon-btn">
			<IconSvg Icon={IconLinkedin} {...props} />
		</AnchorBlank>
	)
}

export default LinkedInIconButton
