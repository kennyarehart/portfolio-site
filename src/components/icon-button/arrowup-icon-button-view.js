import React from 'react'
import gsap, { ScrollToPlugin } from 'gsap/all'
import { ReactComponent as IconArrow } from '../../assets/images/icon_arrow.svg'
import IconSvg from '../icon-svg'
import { iconColors } from '../../lib/utils.js'

gsap.registerPlugin(ScrollToPlugin)

function ArrowUpIconButton(props) {
	function handleScrollToTop(event) {
		event.preventDefault()
		gsap.to(window, 0.7, { scrollTo: 0 })
	}

	return (
		<div className="up-arrow icon-btn" onClick={handleScrollToTop}>
			<IconSvg Icon={IconArrow} {...props} colors={iconColors.overBlue} />
		</div>
	)
}

export default ArrowUpIconButton
