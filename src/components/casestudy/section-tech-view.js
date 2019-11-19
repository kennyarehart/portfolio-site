import React from 'react'

function CaseStudySectionTech(props) {
	return (
		<div className="section section-tech">
			<h4>Technologies:</h4>
			{props.data.content.map((item, i) => (
				<code key={i}>{item}</code>
			))}
		</div>
	)
}

export default CaseStudySectionTech
