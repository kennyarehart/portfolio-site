import React from 'react'

function CaseStudyTag(props) {
	return (
		<div className="section">
			{props.data.content.map((item, i) => {
				const CustomTag = item.tag || 'div'
				return (
					<CustomTag key={i} {...item.props}>
						{item.content}
					</CustomTag>
				)
			})}
		</div>
	)
}

export default CaseStudyTag
