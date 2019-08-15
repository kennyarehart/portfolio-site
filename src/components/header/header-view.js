import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import sectionData from '../../data/section.json'
import './header.css'

function Header() {
	const title = 'Kenny Arehart'.toUpperCase()

	useEffect(() => {
		//
	})

	function createLinks() {
		return sectionData.active.map((val, i) => {
			if (val.url) {
				return (
					<a href={val.url} target="_blank" key={i}>
						{val.label}
					</a>
				)
			} else {
				return (
					<Link to={val.path} key={i}>
						{val.label}
					</Link>
				)
			}
		})
	}

	const nav = <nav>{createLinks()}</nav>

	return (
		<header>
			<Link to="/">{title}</Link>
			{nav}
		</header>
	)
}

export default Header
