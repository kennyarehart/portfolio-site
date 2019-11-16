import React, { useState, useEffect, useRef } from 'react'
import './casestudy.css'
import axios from 'axios'
import CaseStudyTag from './casestudy-tag-view'
import fetchCaseStudy from './fetchCaseStudy'

function CaseStudy({ name }) {
	const [data, setData] = useState({})
	const [header, setHeader] = useState({})
	const bgRef = useRef()

	useEffect(() => {
		fetchCaseStudy(name).then(data => {
			setData(data)
			setHeader({
				bg: { backgroundImage: `url(${data.header.bg})` },
				logo: data.header.logo
			})
		})

		window.addEventListener('scroll', handleScroll)
	}, [])

	function handleScroll(event) {
		var doc = event.target
		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
		let itemTranslate = top / 2.2 || 0
		bgRef.current.style.transform = `translateY(${itemTranslate}px)`
	}

	return (
		<div id="content">
			<div className="header-section">
				<div className="cover-image" style={header.bg} ref={bgRef}></div>
				<div className="title-container">
					<img src={header.logo} alt="header-logo" />
				</div>
				{/* <div className="more-button">
					<div>icon arrow</div>
				</div> */}
			</div>
			<div className="body-section">
				{data.sections && data.sections.map((section, i) => <CaseStudyTag data={section} key={i} />)}
			</div>
		</div>
	)
}

export default CaseStudy
