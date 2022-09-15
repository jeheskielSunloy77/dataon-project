import bgImage from '@/assets/background.svg'
import { userDB } from '@/utils/index'
import { Card, notification } from 'antd'
import 'antd/dist/antd.css'
import sign from 'jwt-encode'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import CardBody from './CardBody'
import CardHeader from './CardHeader'

const secret = 'as12ewqasdassao1121903rqeijoasjdoqwe'

const Login = () => {
	const [rememberMe, setRememberMe] = useState(false)
	const navigate = useNavigate()
	const { t } = useTranslation()

	const signIn = ({ username, password }) => {
		const user = userDB.find((user) => user.username === username)

		if (user && user.password === password) {
			const token = sign(user, secret)
			rememberMe
				? localStorage.setItem('token', token)
				: sessionStorage.setItem('token', token)
			navigate('/')
		} else notification.warning({ message: t('Wrong password or username!') })
	}

	useEffect(() => {
		notification.info({
			message: t('Testing Accounts'),
			description: t(
				'Username: admin, Password: admin and Username: user1, Password: user1'
			),
		})
	}, [])

	return (
		<main
			className='centerAll h-screen bg-no-repeat bg-center bg-cover'
			style={{ backgroundImage: `url(${bgImage})` }}
			data-testid='loginWrapper'
		>
			<Card className='max-w-[90%] max-h-[90%] sm:w-[60%] rounded-xl shadow-2xl'>
				<CardHeader />
				<CardBody signIn={signIn} setRememberMe={setRememberMe} />
			</Card>
		</main>
	)
}

export default Login
