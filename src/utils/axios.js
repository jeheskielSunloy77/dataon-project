import axios from 'axios'

const baseURL = 'https://631d5f3b789612cd07a9b215.mockapi.io/api/v1/'

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
