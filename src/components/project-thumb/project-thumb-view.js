import React, { useEffect, useRef } from 'react'
import './project-thumb.css'
import { TweenMax, Power2 } from 'gsap'

function ProjectThumb(props) {

	let imgRef = useRef(null)

	useEffect(() => {
        // TweenMax.to(
        //     imgRef,
        //     1,
        //     {
        //         repeat: -1,
        //         rotation: 360,
        //         ease: Linear.easeNone
        //     }
        // )
	}, []);

	return (
		<div className="container">
			<img src={props.src} ref={elem => {imgRef = elem}} className="" alt="" />
			<div className="overlay">
				<div className="text">Here's some text</div>
			</div>
		</div>		
	)
}

export default ProjectThumb
