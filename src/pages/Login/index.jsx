import bgImage from '@/assets/background.svg'
import { Card } from 'antd'
import 'antd/dist/antd.css'
import CardBody from './CardBody'
import CardHeader from './CardHeader'

const Login = () => (
	<main
		className='centerAll h-screen bg-no-repeat bg-center bg-cover'
		style={{ backgroundImage: `url(${bgImage})` }}
		data-testid='loginWrapper'
	>
		<Card className='max-w-[90%] max-h-[90%] sm:w-[60%] rounded-xl shadow-2xl'>
			<CardHeader />
			<CardBody />
		</Card>
	</main>
)

export default Login
