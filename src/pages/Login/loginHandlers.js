import { jwtSecret, userDB } from '@/utils/index'
import { notification } from 'antd'
import sign from 'jwt-encode'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const loginHadlers = () => {
	const [rememberMe, setRememberMe] = useState(false)

	const navigate = useNavigate()
	const { t, i18n } = useTranslation()

	const setLanguage = (value) => {
		i18n.changeLanguage(value)
		localStorage.setItem('lng', value)
	}

	const signIn = ({ username, password }) => {
		const user = userDB.find((user) => user.username === username)

		if (user && user.password === password) {
			const token = sign(user, jwtSecret)
			rememberMe
				? localStorage.setItem('token', token)
				: sessionStorage.setItem('token', token)
			navigate('/')
		} else notification.warning({ message: t('Wrong password or username!') })
	}

	const usernameRules = [
		{ required: true, message: t('Please Enter Your Username') },
		{
			max: 20,
			min: 5,
			message: t('Username must be between 5 and 20 characters'),
		},
		{
			pattern: new RegExp(/^[a-zA-Z0-9]+$/g),
			message: t('Username can only be an alphanumeric value'),
		},
	]

	const passwordRules = [
		{ required: true, message: t('Please Enter Your Password') },
		{
			max: 20,
			min: 5,
			message: t('Password must be between 5 and 20 characters'),
		},
	]

	return { setRememberMe, signIn, t, usernameRules, passwordRules, setLanguage }
}

export default loginHadlers
