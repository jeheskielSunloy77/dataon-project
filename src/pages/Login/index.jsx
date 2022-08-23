import axios from '@/utils/axios'
import { Card } from 'antd'
import 'antd/dist/antd.css'
import sign from 'jwt-encode'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginCardBody from './LoginCardBody'
import LoginCardFooter from './LoginCardFooter'
import LoginCardHead from './LoginCardHead'
import LoginWrapper from './LoginWrapper'

const Login = () => {
	const navigate = useNavigate()
	const [usersData, setUsersData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('?seed=8c191e56a88fc13d&inc=login')
			const data = { ...response.data.results[0].login, userId: 'user123' }
			setUsersData(data)
		}
		fetchData()
	}, [])

	const signIn = ({ username, password }) => {
		if (usersData.username === username && usersData.password === password) {
			const jwt = sign(usersData, 'as12ewqasdassao1121903rqeijoasjdoqwe')

			localStorage.setItem('token', jwt)
			navigate('/')
		} else alert('Username or password is incorrect!')
	}

	return (
		<LoginWrapper>
			<Card className='max-w-[90%] sm:max-w-[60%] rounded-xl shadow-2xl'>
				<LoginCardHead />
				<LoginCardBody signIn={signIn} />
				<LoginCardFooter />
			</Card>
		</LoginWrapper>
	)
}

export default Login
