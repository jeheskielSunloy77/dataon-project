import { Card } from 'antd'
import 'antd/dist/antd.css'
import { useNavigate } from 'react-router-dom'
import LoginCardBody from './LoginCardBody'
import LoginCardFooter from './LoginCardFooter'
import LoginCardHead from './LoginCardHead'
import LoginWrapper from './LoginWrapper'

const Login = () => {
	const navigate = useNavigate()
	const usersDb = ['admin', 'client']

	const signIn = ({ username, password }) => {
		if (usersDb.includes(username) && usersDb.includes(password)) {
			localStorage.setItem('token', username)
			navigate('/')
		} else
			alert(
				'Username or password is incorrect!, Use admin & admin || client & client to login'
			)
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
