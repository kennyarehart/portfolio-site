import React from 'react'
import DynamicTag from '../dynamic-tag'

function CaseStudySection(props) {
	return (
		<div className="section">
			{props.data.content.map((item, i) => (
				<DynamicTag data={item} key={i} />
			))}
		</div>
	)
}

export default CaseStudySection
