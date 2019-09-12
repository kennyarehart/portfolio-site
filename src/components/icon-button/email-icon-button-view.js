import React from 'react'
import { ReactComponent as IconEmail } from '../../assets/images/icon_email.svg'
import IconButton from './icon-button-view.js'

function EmailIconButton(props) {
	return <IconButton Icon={IconEmail} href="mailto:kennyarehart@gmail.com" alt="Email Me" {...props} />
}

export default EmailIconButton
