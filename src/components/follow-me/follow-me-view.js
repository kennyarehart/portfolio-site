import React from 'react'
import './follow-me.css'
import Anchor from '../react-a'
import { ReactComponent as IconEmail } from "../../assets/images/icon_email.svg";
import { ReactComponent as IconLinkedin } from "../../assets/images/icon_linkedin.svg";
import { ReactComponent as IconGithub } from "../../assets/images/icon_github.svg";
import { TweenLite } from 'gsap'

function FollowMe() {

	function handleOver(event) {
		TweenLite.to(event.currentTarget, 0.1, { fill:'#114867' })
	}

	function handleOut(event) {
		TweenLite.to(event.currentTarget, 0.7, { fill:'#ffffff' })
	}

	return (
		<div className="follow-me">
			<ul>
				<li>
					<Anchor href="mailto:kennyarehart@gmail.com" className="email">
						<span>Email Me</span>
						<IconEmail onMouseEnter={handleOver} onMouseLeave={handleOut} />
					</Anchor>
				</li>
				<li>
					<Anchor href="https://www.linkedin.com/in/kennyarehart/" className="linkedin">
						<span>Connect on LinkedIn</span>
						<IconLinkedin onMouseEnter={handleOver} onMouseLeave={handleOut} />
					</Anchor>
				</li>
				<li>
					<Anchor href="https://github.com/kennyarehart" className="github">
						<span>Follow on Github</span>
						<IconGithub onMouseEnter={handleOver} onMouseLeave={handleOut} />
					</Anchor>
				</li>
			</ul>
		</div>
	)
}

export default FollowMe
