import React, { useState, useEffect, useRef } from 'react'
import './casestudy.css'
import CaseStudySection from './section-view'
import CaseStudySectionTeam from './section-team-view'
import CaseStudySectionVideo from './section-video-view'
import CaseStudySectionHeader from './section-header-view'
import { fetchCaseStudy } from '../../lib/fetchData'
import { ArrowUpIconButton, HomeIconButton } from '../icon-button'
import { Link } from 'react-router-dom'
import { getHome } from '../../lib/links'

function CaseStudy(props) {
	const name = props.location.state.name

	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState({ header: {}, sections: [] })

	useEffect(() => {
		fetchCaseStudy(name).then(data => {
			console.log('data:', data)
			setData(data)
			setIsLoading(false)
		})
	}, [])

	return (
		<div id="casestudy">
			{isLoading ? (
				<div />
			) : (
				<>
					<CaseStudySectionHeader data={data} />
					<div className="body-section">
						{data.sections.map((section, i) => {
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
						<ArrowUpIconButton colors={['#114867', '#ffffff']} />
					</div>
				</>
			)}
			{/* <Link to={getHome()}>
				<button id="home-btn">HOME</button>
			</Link> */}
			<HomeIconButton />
		</div>
	)
}

export default CaseStudy
