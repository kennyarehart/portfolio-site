import React from 'react'
import { ReactComponent as IconEmail } from '../../assets/images/icon_email.svg'
import IconSvg from '../icon-svg'
import { AnchorBlank } from '../react-a'

function EmailIconButton(props) {
	return (
		<AnchorBlank href="mailto:kennyarehart@gmail.com" alt="Email Me" className="icon-btn">
			<IconSvg Icon={IconEmail} {...props} />
		</AnchorBlank>
	)
}

export default EmailIconButton
