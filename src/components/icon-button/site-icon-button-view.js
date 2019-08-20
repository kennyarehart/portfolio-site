import React from 'react'
import { ReactComponent as IconSite } from "../../assets/images/icon_site.svg";
import IconButton from './icon-button-view.js'

function SiteIconButton(props) {
	return <IconButton Icon={IconSite} {...props} />
}

export default SiteIconButton
