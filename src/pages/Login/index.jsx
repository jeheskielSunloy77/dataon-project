import { userDB } from '@/mockData'
import { Card, notification } from 'antd'
import 'antd/dist/antd.css'
import sign from 'jwt-encode'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardBody from './CardBody'
import CardHeader from './CardHeader'
import Wrapper from './Wrapper'

const Login = () => {
	const [rememberMe, setRememberMe] = useState(false)
	const navigate = useNavigate()

	const signIn = ({ username, password }) => {
		const user = userDB.find((user) => user.username === username)

		if (user && user.password === password) {
			const token = sign(user, 'as12ewqasdassao1121903rqeijoasjdoqwe')
			rememberMe
				? localStorage.setItem('token', token)
				: sessionStorage.setItem('token', token)
			navigate('/')
		} else notification.warning({ message: 'Wrong password or username!' })
	}

	return (
		<Wrapper>
			<Card className='max-w-[90%] sm:max-w-[60%] rounded-xl shadow-2xl'>
				<CardHeader />
				<CardBody signIn={signIn} setRememberMe={setRememberMe} />
			</Card>
		</Wrapper>
	)
}

export default Login
