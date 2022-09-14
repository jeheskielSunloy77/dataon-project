import jwt_decode from 'jwt-decode'

const getUser = () => {
	const token = localStorage.getItem('token') || sessionStorage.getItem('token')
	const user = (token && jwt_decode(token)) || null

	return user
}

export default getUser
