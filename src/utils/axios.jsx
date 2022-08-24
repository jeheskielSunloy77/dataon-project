import axios from 'axios'

const baseURL = 'https://6304641b761a3bce77e6d7fd.mockapi.io/api/v3/'

const customAxios = axios.create({
	baseURL,
})

const responseHandler = (response) => {
	if (response.status < 200 || response.status >= 300) {
		console.error(`HTTP response status: ${response.status}`)
	}

	return response
}

customAxios.interceptors.response.use(
	(response) => responseHandler(response),
	(error) => Promise.reject(error)
)

export default customAxios
