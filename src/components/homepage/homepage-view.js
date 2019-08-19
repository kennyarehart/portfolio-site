import React, { useEffect } from 'react'
import './homepage.css'
import Gallery from '../gallery'
import FollowMe from '../follow-me'

function Homepage() {

	useEffect(() => {
        // TweenMax.to(
        //     [imgElem0, imgElem1],
        //     1,
        //     {
        //         repeat: -1,
        //         rotation: 360,
        //         ease: Linear.easeNone
        //     }
        // )
	}, [])

	return (
		<div className="homepage-container">
			<div className="landing">
				<h1>
					Hi,
					<br />
					I'm Kenny,
					<br />
					web developer.
				</h1>
				<div className="chunk subline">Front End Developer / Animator / Mentor</div>
				<div className="chunk">
					<FollowMe />
				</div>
			</div>
			<div className="chunk">
				<Gallery />
			</div>
		</div>
	)
}

export default Homepage
