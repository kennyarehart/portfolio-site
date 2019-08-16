import React from 'react'
import './homepage.css'
import Anchor from '../react-a'

function Homepage() {
	return (
		<div className="homepage-container">
			<h1>
				Hi,
				<br />
				I'm Kenny,
				<br />
				web developer.
			</h1>
			<div className="sub-line">Front End Developer / Animator / Mentor</div>
			<div className="follow-me">
				<ul>
					<li>
						<Anchor href="./" className="email">
							<span>Email Me</span>
						</Anchor>
					</li>
					<li>
						<Anchor href="./" className="linkedin">
							<span>Connect on LinkedIn</span>
						</Anchor>
					</li>
					<li>
						<Anchor href="./" className="github">
							<span>Follow on Github</span>
						</Anchor>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Homepage
