import axios from 'axios'

export function fetchCaseStudy(name) {
	return new Promise((resolve, reject) => {
		axios.get(`/data/${name}.json`).then(response => {
			resolve(response.data)
		})
	})
}
