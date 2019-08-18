import React from 'react'
import ProjectThumb from '../project-thumb'
import './gallery.css'
import site_alk from '../../assets/images/site_alk.png'
import site_fat from '../../assets/images/site_fat.png'
import data from '../../data/portfolio.json'

function Gallery() {
	return (
		<div className="portfolio">
            <ProjectThumb src={site_alk} header="Wedding Website" details="Design & Development" />
            <ProjectThumb src={site_fat} header="Ad Production Pipeline" details="Architecture & Development" />
        </div>
    )
}

export default Gallery
