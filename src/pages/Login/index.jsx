import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ButtonPrimary, Card } from '../../components'
import { Info } from './Info'
import { Inputs } from './Inputs'

const Login = () => {
	const { rememberMe, setRememberMe } = useState(true)
	const { register, handleSubmit } = useForm()
	const navigate = useNavigate()
	const usersDb = ['admin', 'client']

	const signIn = ({ username, password }) => {
		if (usersDb.includes(username) && usersDb.includes(password)) {
			localStorage.setItem('token', 'admin')
			navigate('/')
		} else
			alert(
				'Username or password is incorrect!, Use admin & admin or client & client to login'
			)
	}

	return (
		<Card className='centerAbsolute w-[95%] sm:max-w-2xl p-10'>
			<form onSubmit={handleSubmit(signIn)} className='space-y-6 '>
				<Info />
				<Inputs
					register={register}
					rememberMe={rememberMe}
					setRememberMe={setRememberMe}
				/>
				<ButtonPrimary text='Sign In' type='submit' className='w-full' />
			</form>
		</Card>
	)
}

export default Login
