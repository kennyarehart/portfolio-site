import React from 'react'

function CaseStudySectionTeam(props) {
	return (
		<div className="section section-team">
			<h1>{props.data.content.title}</h1>
			<table>
				<tbody>
					{props.data.content.team.map((item, i) => {
						return (
							<tr key={i}>
								<td>{item[0]}</td>
								<td>{item[1]}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default CaseStudySectionTeam
