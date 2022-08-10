import { Button, Card, Form } from 'antd'
import 'antd/dist/antd.css'
import { useNavigate } from 'react-router-dom'
import { Info } from './Info'
import { Inputs } from './Inputs'

const Login = () => {
	const navigate = useNavigate()
	const usersDb = ['admin', 'client']
	const [form] = Form.useForm()

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
		<Card className='min-w-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-2xl shadow-2xl'>
			<Form className='space-y-4' form={form} onFinish={signIn}>
				<Info />
				<Inputs />
				<Button
					type='primary'
					size='large'
					htmlType='submit'
					className='shadow-lg shadow-emerald-700 hover:shadow-xl hover:shadow-emerald-700 transition-all text-white bg-gradient-to-br from-green-600 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-none w-full'
				>
					Sign In
				</Button>
			</Form>
		</Card>
	)
}

export default Login
