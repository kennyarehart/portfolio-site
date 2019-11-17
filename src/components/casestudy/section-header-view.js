import React, { useEffect, useRef } from 'react'

function CaseStudySectionHeader(props) {
	const data = props.data.header
	const bg = { backgroundImage: `url(${data.bg})` }
	const bgRef = useRef()

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	function handleScroll(event) {
		var doc = event.target
		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
		let itemTranslate = top / 2.2 || 0
		bgRef.current.style.transform = `translateY(${itemTranslate}px)`
	}

	return (
		<div className="header-section">
			<div className="cover-image" style={bg} ref={bgRef}></div>
			<div className="title-container">
				<img src={data.logo} alt="header-logo" />
			</div>
			<div className="more-button">
				<div>icon arrow</div>
			</div>
		</div>
	)
}

export default CaseStudySectionHeader
