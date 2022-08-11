import loginIlustration1 from '@/assets/loginIlustration1.svg'
import loginIlustration2 from '@/assets/loginIlustration2.svg'
import loginIlustration3 from '@/assets/loginIlustration3.svg'
import { Button, Carousel, Form } from 'antd'
import LoginFormInputs from './LoginFormInputs'

const LoginCardBody = ({ signIn }) => {
	const [form] = Form.useForm()

	return (
		<div className='sm:flex my-14'>
			<div className='container mx-auto w-full sm:w-1/2 p-2'>
				<Carousel autoplay swipeToSlide draggable>
					<img
						src={loginIlustration1}
						alt='login page ilustration 1'
						className='w-full'
					/>
					<img
						src={loginIlustration2}
						className='w-full'
						alt='login page ilustration 2'
					/>
					<img
						src={loginIlustration3}
						className='w-full'
						alt='login page ilustration 2'
					/>
				</Carousel>
			</div>
			<div className='container mx-auto w-full sm:w-1/2 p-2'>
				<Form layout='vertical' className='space-y-1' form={form} onFinish={signIn}>
					<h1 className='text-2xl font-semibold text-blue-500'>
						Please enter your cridentials to access the system
					</h1>
					<LoginFormInputs />
					<Button
						type='primary'
						htmlType='submit'
						className='bg-blue-500 w-full sm:w-40 rounded-md'
					>
						Sign In
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default LoginCardBody
