import React from 'react'
import './icon-button.css'
import Anchor from '../react-a'
import Icon from '../icon-svg'

function IconButton({ href, alt, ...props }) {
	console.log('IconButton:', props)
	return (
		<Anchor href={href} alt={alt} className="icon-btn">
			<Icon {...props} />
		</Anchor>
	)
}

export default IconButton
