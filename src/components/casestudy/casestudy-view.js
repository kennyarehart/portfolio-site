import React, { useState, useEffect, useRef } from 'react'
import './casestudy.css'
import CaseStudySection from './section-view'
import CaseStudySectionTeam from './section-team-view'
import CaseStudySectionVideo from './section-video-view'
import fetchCaseStudy from './fetchCaseStudy'
import gsap, { ScrollToPlugin } from 'gsap/all'
import { ReactComponent as IconArrowUp } from '../../assets/images/icon_arrowup.svg'
import { Link } from 'react-router-dom'
import { getHome } from '../../lib/links'

function CaseStudy(props) {
	const name = props.location.state.name

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

		gsap.registerPlugin(ScrollToPlugin)

		window.addEventListener('scroll', handleScroll)
	}, [])

	function handleScroll(event) {
		var doc = event.target
		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
		let itemTranslate = top / 2.2 || 0
		bgRef.current.style.transform = `translateY(${itemTranslate}px)`
	}

	function handleScrollToTop(event) {
		console.log('click', event.target)
		event.preventDefault()
		gsap.to(window, 1, { scrollTo: 0 })
	}

	return (
		<div id="casestudy">
			<div className="header-section">
				<div className="cover-image" style={header.bg} ref={bgRef}></div>
				<div className="title-container">
					<img src={header.logo} alt="header-logo" />
				</div>
				<div className="more-button">
					<div>icon arrow</div>
				</div>
				<Link to={getHome()}>
					<button id="home-btn">HOME</button>
				</Link>
			</div>
			<div className="body-section">
				{data.sections &&
					data.sections.map((section, i) => {
						let ChosenClass
						switch (section.type) {
							case 'team':
								ChosenClass = CaseStudySectionTeam
								break
							case 'video':
								ChosenClass = CaseStudySectionVideo
								break
							default:
								ChosenClass = CaseStudySection
						}

						return <ChosenClass data={section} key={i} />
					})}
			</div>
			<div className="footer-section">
				<div className="up-arrow" onClick={handleScrollToTop}>
					<IconArrowUp />
				</div>
			</div>
		</div>
	)
}

export default CaseStudy
