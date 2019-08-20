import React from 'react'
import { ReactComponent as IconGithub } from "../../assets/images/icon_github.svg";
import IconButton from './icon-button-view.js'

function GithubIconButton(props) {
	return <IconButton Icon={IconGithub} {...props} />
}

export default GithubIconButton
