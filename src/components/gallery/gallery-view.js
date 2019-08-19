import React from 'react'
import ProjectThumb from '../project-thumb'
import './gallery.css'
import json from '../../data/portfolio.json'

function Gallery() {
	return (
		<div className="portfolio">
            {json.map((obj, i) => <ProjectThumb data={obj} key={i} /> )}
        </div>
    )
}

export default Gallery
