import React from 'react'
import gsap, { ScrollToPlugin } from 'gsap/all'
import { ReactComponent as IconArrowUp } from '../../assets/images/icon_arrowup.svg'
import IconSvg from '../icon-svg'

gsap.registerPlugin(ScrollToPlugin)

function ArrowUpIconButton(props) {
	function handleScrollToTop(event) {
		event.preventDefault()
		gsap.to(window, 0.7, { scrollTo: 0 })
	}

	return (
		<div className="up-arrow icon-btn" onClick={handleScrollToTop}>
			<IconSvg Icon={IconArrowUp} {...props} />
		</div>
	)
}

export default ArrowUpIconButton
