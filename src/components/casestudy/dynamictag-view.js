import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function DynamicTag(props) {
	const CustomTag = props.data.tag || 'div'
	let val = CustomTag !== 'img' ? ReactHtmlParser(props.data.content) : props.data.content

	return <CustomTag {...props.data.props}>{val}</CustomTag>
}

export default DynamicTag
