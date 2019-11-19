import React from 'react'
import './icon-button.css'
import Anchor from '../react-a'
import Icon from '../icon-svg'

function IconButton({ href, alt, target, ...props }) {
	const localTarget = target || false
	return (
		<Anchor href={href} alt={alt} className="icon-btn" target={localTarget}>
			<Icon {...props} />
		</Anchor>
	)
}

export default IconButton
