import axios from 'axios'

const baseURL = 'https://6304641b761a3bce77e6d7fd.mockapi.io/api/v3/'

fetch(baseURL + 'trainings').then((response) => {
	if (!response.ok) {
		throw new Error('HTTP status ' + response.status)
	} else {
		return baseURL
	}
})

export default axios.create({
	baseURL,
})
