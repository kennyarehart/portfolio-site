import React from 'react'
import { ReactComponent as IconHome } from '../../assets/images/icon_home.svg'
import IconSvg from '../icon-svg'
import { Link } from 'react-router-dom'
import { getHome } from '../../lib/links'

function HomeIconButton(props) {
	return (
		<Link to={getHome()} id="home-btn" className="icon-btn">
			<IconSvg Icon={IconHome} colors={['#114867', '#ffffff']} />
		</Link>
	)
}

export default HomeIconButton
