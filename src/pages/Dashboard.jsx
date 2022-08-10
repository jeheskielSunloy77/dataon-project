import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
	const navigate = useNavigate()
	const token = localStorage.getItem('token')

	if (!token) navigate('/login')
	else
		return (
			<div>
				Wellcome <strong>{token}!</strong>
			</div>
		)
}

export default Dashboard
