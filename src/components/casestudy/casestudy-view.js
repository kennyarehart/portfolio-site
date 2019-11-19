import React, { useState, useEffect } from 'react'
import './casestudy.scss'
import CaseStudySection from './section-view'
import CaseStudySectionTeam from './section-team-view'
import CaseStudySectionVideo from './section-video-view'
import CaseStudySectionHeader from './section-header-view'
import CaseStudySectionLinks from './section-links-view'
import CaseStudySectionAds from './section-ads-view'
import { fetchCaseStudy } from '../../lib/fetchData'
import { ArrowUpIconButton, HomeIconButton } from '../icon-button'

function CaseStudy(props) {
	const name = props.location.state.name
	console.log('CASE STUDY:', name)

	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState({ header: {}, sections: [] })

	useEffect(() => {
		fetchCaseStudy(name).then(data => {
			setData(data)
			setIsLoading(false)
		})
	}, [])

	return (
		<div id="casestudy" className={name}>
			{isLoading ? (
				<div />
			) : (
				<>
					{data.header ? <CaseStudySectionHeader data={data} /> : <div />}
					<div className="body-section" id={name}>
						{data.sections.map((section, i) => {
							let ChosenClass
							switch (section.type) {
								case 'team':
									ChosenClass = CaseStudySectionTeam
									break
								case 'video':
									ChosenClass = CaseStudySectionVideo
									break
								case 'links':
									ChosenClass = CaseStudySectionLinks
									break
								case 'ads':
									ChosenClass = CaseStudySectionAds
									break
								default:
									ChosenClass = CaseStudySection
							}

							var sectionHolder = 'section-holder'
							if (section.type === 'full') {
								sectionHolder += ' section-full'
							}

							return (
								<div className={sectionHolder} key={i}>
									<ChosenClass data={section} />
								</div>
							)
						})}
					</div>

					<div className="footer-section">
						<ArrowUpIconButton colors={['#114867', '#ffffff']} />
					</div>
				</>
			)}
			<HomeIconButton />
		</div>
	)
}

export default CaseStudy
