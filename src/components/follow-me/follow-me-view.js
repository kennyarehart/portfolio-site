import React from 'react'
import styles from './follow-me.css'
import { GithubIconButton, LinkedInIconButton, EmailIconButton } from '../icon-button'

function FollowMe() {
	console.log('FollowMe, styles:', styles)
	return (
		<div className={styles.followme}>
			<EmailIconButton colors={['#114867', '#ffffff']} />
			<LinkedInIconButton colors={['#114867', '#ffffff']} />
			<GithubIconButton colors={['#114867', '#ffffff']} />
		</div>
	)
}

export default FollowMe
