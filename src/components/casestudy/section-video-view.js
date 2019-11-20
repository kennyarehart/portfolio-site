import React from 'react'

function CaseStudySectionVideo(props) {
	return (
		<div className="section section-video">
			<div className="video-holder">
				<iframe title="Embeded Video" {...props.data.props} />
			</div>
		</div>
	)
}

export default CaseStudySectionVideo
