import React, { useState } from 'react'

function CaseStudySectionAds(props) {
	console.log('ADS, props:', props)
	const [size, setSize] = useState(null)

	const preview = props.data.baseurl + 'preview.jpg'

	function handleClick(item) {
		item.src = props.data.baseurl + item.size
		setSize(item)
	}

	return (
		<div className="section section-ads">
			<hr />
			<h3>{props.data.client}</h3>
			<h2>{props.data.campaign}</h2>
			<p>{props.data.desc}</p>
			<h4>Select a size to preview.</h4>
			<div className="ad-sizes">
				{props.data.sizes.map((item, i) => {
					item.size = `${item.width}x${item.height}`
					return (
						<div key={i} className="size-btn" onClick={() => handleClick(item)}>
							{item.size}
						</div>
					)
				})}
			</div>
			<div className="ad-display">
				{size ? <iframe title="Embeded Ad" {...size} frameBorder="0" /> : <img className="ad-preview" src={preview} />}
			</div>
		</div>
	)
}

export default CaseStudySectionAds
