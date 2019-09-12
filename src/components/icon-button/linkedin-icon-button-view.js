import React from 'react'
import { ReactComponent as IconLinkedin } from '../../assets/images/icon_linkedin.svg'
import IconButton from './icon-button-view.js'

function LinkedInIconButton(props) {
	return <IconButton Icon={IconLinkedin} href="https://www.linkedin.com/in/kennyarehart/" alt="Connect on LinkedIn" {...props} />
}

export default LinkedInIconButton
