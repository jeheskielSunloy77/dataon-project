import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../utils/AppContext'

const Dashboard = () => {
	const { state } = useContext(AppContext)
	const navigate = useNavigate()
	const token = localStorage.getItem('token')

	if (!token) navigate('/login')
	else
		return (
			<div>
				Wellcome <strong>{token}!</strong>
				<br /> This is a <strong>{state}</strong> and it is visible to everyone
			</div>
		)
}

export default Dashboard
