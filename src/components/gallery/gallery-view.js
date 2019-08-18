import React from 'react'
import ProjectThumb from '../project-thumb'
import './gallery.css'
import site_alk from '../../assets/images/site_alk.png'
import site_fat from '../../assets/images/site_fat.png'

function Gallery() {
	return (
		<div className="portfolio">
            <ProjectThumb src={site_alk} />
            <ProjectThumb src={site_fat} />
        </div>
    )
}

export default Gallery
