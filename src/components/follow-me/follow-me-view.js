import React from 'react'
import './follow-me.css'
import Anchor from '../react-a'

function FollowMe() {
	return (
		<div className="follow-me">
			<ul>
				<li>
					<Anchor href="mailto:kennyarehart@gmail.com" className="email">
						<span>Email Me</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://www.linkedin.com/in/kennyarehart/" className="linkedin">
						<span>Connect on LinkedIn</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://github.com/kennyarehart" className="github">
						<span>Follow on Github</span>
					</Anchor>
				</li>
			</ul>
		</div>
	)
}

export default FollowMe
