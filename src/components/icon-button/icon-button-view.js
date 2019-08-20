import React, { useRef } from 'react'
import './icon-button.css'
import Anchor from '../react-a'
import { TweenLite } from 'gsap'

function IconButton({ Icon, href, alt, text, colors}) {
	const refIcon = useRef()
	const refSpan = useRef()

	colors = colors || ['#0084cd', '#656566']
	let span

	function handleOver() {
		TweenLite.to(refIcon.current, 0.1, { fill: colors[0] })
		if (span)
			TweenLite.to(refSpan.current, 0.1, { color: colors[0] })
	}

	function handleOut() {
		TweenLite.to(refIcon.current, 0.7, { fill: colors[1] })
		if (span)
			TweenLite.to(refSpan.current, 0.7, { color: colors[1] })
	}

	if (text) {
		span = <span className="" ref={refSpan}>{text}</span>
	}

	return (
		<Anchor href={href} alt={alt} className="icon-btn" onMouseEnter={handleOver} onMouseLeave={handleOut}>
			<div className="svg-container">
				<Icon ref={refIcon} />
			</div>
			{span}
		</Anchor>
	)
}

export default IconButton
