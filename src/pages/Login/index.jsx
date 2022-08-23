import axios from '@/utils/axios'
import { Card } from 'antd'
import 'antd/dist/antd.css'
import sign from 'jwt-encode'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import Wrapper from './Wrapper'

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
		<Wrapper>
			<Card className='max-w-[90%] sm:max-w-[60%] rounded-xl shadow-2xl'>
				<CardHeader />
				<CardBody signIn={signIn} />
				<CardFooter />
			</Card>
		</Wrapper>
	)
}

export default Login
