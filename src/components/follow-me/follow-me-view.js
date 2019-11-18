import React from 'react'
import './follow-me.css'
import { GithubIconButton, LinkedInIconButton, EmailIconButton } from '../icon-button'

function FollowMe() {
	return (
		<div className="follow-me">
			<EmailIconButton colors={['#114867', '#ffffff']} />
			<LinkedInIconButton colors={['#114867', '#ffffff']} />
			<GithubIconButton colors={['#114867', '#ffffff']} />
		</div>
	)
}

export default FollowMe
