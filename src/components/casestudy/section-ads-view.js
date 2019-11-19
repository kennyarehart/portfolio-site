import React, { useState, useRef, useEffect } from 'react'
import { ArrowToggleIconButton } from '../icon-button'
import ReactHtmlParser from 'react-html-parser'
import gsap from 'gsap'

function CaseStudySectionAds(props) {
	console.log('ADS, props:', props)
	const [size, setSize] = useState(null)
	const [isExpanded, setIsExpanded] = useState(false)
	const collapsible = useRef()

	const preview = props.data.baseurl + 'preview.jpg'

	function handleClickSize(item) {
		item.src = props.data.baseurl + item.size + '/' + (props.data.query || '')
		setSize(item)
	}

	function handleClickExpand(event) {
		setIsExpanded(!isExpanded)
	}

	useEffect(() => {
		const h = isExpanded ? 'auto' : 0
		gsap.to(collapsible.current, 0.3, { height: h })
	}, [isExpanded])

	return (
		<div className="section section-ads">
			<hr />
			<div className="expand-btn" onClick={handleClickExpand}>
				<ArrowToggleIconButton isExpanded={isExpanded} />
				<h3>{props.data.client}</h3>
			</div>

			<div className="collapsible" ref={collapsible}>
				<h2>{props.data.campaign}</h2>

				<p>{ReactHtmlParser(props.data.desc)}</p>
				<h4>Select a size to preview.</h4>
				<div className="ad-sizes">
					{props.data.sizes.map((item, i) => {
						const obj = {
							width: item[0],
							height: item[1],
							size: `${item[0]}x${item[1]}`
						}
						return (
							<div key={i} className="size-btn" onClick={() => handleClickSize(obj)}>
								{obj.size}
							</div>
						)
					})}
				</div>
			</div>
			<div className="ad-display">
				{size ? <iframe title="Embeded Ad" {...size} frameBorder="0" /> : <img className="ad-preview" src={preview} />}
			</div>
		</div>
	)
}

export default CaseStudySectionAds
