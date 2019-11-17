import axios from 'axios'

export function fetchCaseStudy(name) {
	return new Promise((resolve, reject) => {
		axios.get(`/dynamic/${name}/data.json?cb=${Math.random()}`).then(response => {
			resolve(response.data)
		})
	})
}
