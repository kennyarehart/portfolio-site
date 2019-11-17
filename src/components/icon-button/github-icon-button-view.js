import React from 'react'
import { ReactComponent as IconGithub } from '../../assets/images/icon_github.svg'
import IconSvg from '../icon-svg'
import { AnchorBlank } from '../react-a'

function GithubIconButton(props) {
	return (
		<AnchorBlank href="https://github.com/kennyarehart" alt="Follow on Github" className="icon-btn">
			<IconSvg Icon={IconGithub} {...props} />
		</AnchorBlank>
	)
}

export default GithubIconButton
