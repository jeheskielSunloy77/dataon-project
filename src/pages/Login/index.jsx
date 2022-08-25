import { Notification } from '@/components/index'
import { Card } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
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
			const response1 = await axios.get(
				'https://randomuser.me/api/?seed=8c191e56a88fc13d&inc=login'
			)
			const response2 = await axios.get(
				'https://randomuser.me/api/?seed=3a5fb19fbfac60c9&inc=login'
			)

			const data1 = { ...response1.data.results[0].login, userId: 'user123' }
			const data2 = { ...response2.data.results[0].login, userId: 'user321' }
			setUsersData([data1, data2])
		}
		fetchData()
	}, [])

	const signIn = ({ username, password }) => {
		const user = usersData.find((user) => user.username === username)

		if (user) {
			if (user.password === password) {
				localStorage.setItem(
					'token',
					sign(user, 'as12ewqasdassao1121903rqeijoasjdoqwe')
				)
				navigate('/')
			} else Notification('Username or password is incorrect', '', 'error')
		}
	}

	// const signIn = ({ username, password }) => {
	// 	if (usersData.username === username && usersData.password === password) {
	// 		const jwt = sign(usersData, 'as12ewqasdassao1121903rqeijoasjdoqwe')

	// 		localStorage.setItem('token', jwt)
	// 		navigate('/')
	// 	} else Notification('Username or password is incorrect', '', 'error')
	// }

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
