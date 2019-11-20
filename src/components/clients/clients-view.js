import React from 'react'
import json from '../../data/clients.json'
import './clients.scss'

function Clients() {
	return (
		<div className="clients-container">
			<h4>
				I'm proud to have collaborated with
				<br /> some awesome brands / companies:
			</h4>
			<div className="clients-list">
				{json.list.map((item, i) => {
					return (
						<div className="client-item" key={i}>
							<img src={json.path + item} alt={item} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Clients
