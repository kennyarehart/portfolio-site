import React, { useRef } from 'react'
import './icon-svg.css'
import gsap from 'gsap'

function IconSvg({ Icon, text, colors }) {
	const refIcon = useRef()
	const refSpan = useRef()

	colors = colors || ['#0084cd', '#656566']
	let span

	const styleI = { fill: colors[1] }
	const styleS = { color: colors[1] }

	function handleOver() {
		gsap.to(refIcon.current, 0.1, { fill: colors[0] })
		if (span) gsap.to(refSpan.current, 0.1, { color: colors[0] })
	}

	function handleOut() {
		gsap.to(refIcon.current, 0.7, { fill: colors[1] })
		if (span) gsap.to(refSpan.current, 0.7, { color: colors[1] })
	}

	if (text) {
		span = (
			<span className="" ref={refSpan} style={styleS}>
				{text}
			</span>
		)
	}

	return (
		<div className="icon" onMouseEnter={handleOver} onMouseLeave={handleOut}>
			<div className="svg-container">
				<Icon ref={refIcon} style={styleI} />
			</div>
			{span}
		</div>
	)
}

export default IconSvg
