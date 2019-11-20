import React from 'react'
import { ReactComponent as IconArrow } from '../../assets/images/icon_arrow.svg'
import IconSvg from '../icon-svg'
import { iconColors } from '../../lib/utils.js'

function ArrowToggleIconButton(props) {
	const classNames = `icon-arrow arrow-${props.isExpanded ? 'up' : 'down'}`

	return (
		<div className={classNames}>
			<IconSvg Icon={IconArrow} colors={iconColors.overBlue} text="Details" {...props} />
		</div>
	)
}

export default ArrowToggleIconButton
