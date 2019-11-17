import React from 'react'

function CaseStudySectionTeam(props) {
	return (
		<div className="section section-team">
			<h1>{props.data.content.title}</h1>
			{['job', 'people'].map((type, k) => {
				return (
					<ul className={type} key={k}>
						{props.data.content.team.map((item, i) => {
							return <li key={i}>{item[k]}</li>
						})}
					</ul>
				)
			})}
		</div>
	)
}

export default CaseStudySectionTeam
