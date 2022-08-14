import { Button } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()
	const token = localStorage.getItem('token')

	if (!token) navigate('/login')
	else
		return (
			<div className='pageContainer'>
				<div className='flex justify-between'>
					<h1 className='text-2xl font-bold'>Home</h1>
					<ButtonGroup>
						<Button type='primary' href='/newTraining'>
							Create New Training
						</Button>
						<Button>More</Button>
					</ButtonGroup>
				</div>
			</div>
		)
}

export default Home
