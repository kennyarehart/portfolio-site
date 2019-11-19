import React from 'react'
import './follow-me.css'
import { GithubIconButton, LinkedInIconButton, EmailIconButton } from '../icon-button'
import { iconColors } from '../../lib/utils.js'

function FollowMe() {
	return (
		<div className="follow-me">
			<EmailIconButton colors={iconColors.overBlue} />
			<LinkedInIconButton colors={iconColors.overBlue} />
			<GithubIconButton colors={iconColors.overBlue} />
		</div>
	)
}

export default FollowMe
