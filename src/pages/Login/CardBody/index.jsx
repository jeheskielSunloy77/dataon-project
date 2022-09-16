import loginIlustration1 from '@/assets/loginIlustration1.svg'
import loginIlustration2 from '@/assets/loginIlustration2.svg'
import loginIlustration3 from '@/assets/loginIlustration3.svg'
import { Button, Carousel, Checkbox, Form, Input, Skeleton } from 'antd'
import { useState } from 'react'
import loginHadlers from '../loginHandlers'

const CardBody = () => {
	const [loading, setLoading] = useState(true)
	const [form] = Form.useForm()
	const { signIn, setRememberMe, t, usernameRules, passwordRules } =
		loginHadlers()

	return (
		<>
			<div className='sm:flex sm:my-14'>
				<div className='container mx-auto w-full sm:w-1/2 p-2 '>
					{loading && (
						<Skeleton.Image
							active
							style={{
								height: '100%',
								width: '100%',
								borderRadius: '6px',
							}}
							className='w-full h-full'
						/>
					)}
					<Carousel
						autoplay
						swipeToSlide
						draggable
						style={{ display: loading ? 'none' : 'block' }}
					>
						<img
							src={loginIlustration1}
							alt='login page ilustration 1'
							className='w-full'
							onLoad={() => setLoading(false)}
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
					<Form
						layout='vertical'
						className='space-y-1'
						form={form}
						onFinish={signIn}
						data-testid='loginForm'
					>
						<h1 className='text-2xl font-semibold text-blue-500'>
							{t('Please enter your cridentials to access the system')}
						</h1>
						<Form.Item name='username' rules={usernameRules}>
							<label>
								Username
								<Input
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 placeholder-gray-500 dark:placeholder-gray-400 text-high rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 focus:z-10 sm:text-sm bg-transparent'
									placeholder={t('Enter Your Username')}
									data-testid='usernameInput'
								/>
							</label>
						</Form.Item>
						<Form.Item name='password' rules={passwordRules}>
							<label>
								{t('Password')}
								<Input
									type='password'
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 placeholder-gray-500 dark:placeholder-gray-400 text-high rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 focus:z-10 sm:text-sm bg-transparent'
									placeholder={t('Enter Your Password')}
									data-testid='passwordInput'
								/>
							</label>
						</Form.Item>
						<div className='flex h-8'>
							<Form.Item Item name='rememberMe' valuePropName='checked'>
								<Checkbox
									className='w-full'
									defaultChecked
									data-testid='rememberMeCheckbox'
									onChange={(e) => setRememberMe(e.target.checked)}
								>
									{t('Remember Me')}
								</Checkbox>
							</Form.Item>
							<Button type='link' className='ml-auto'>
								{t('Forgot Password?')}
							</Button>
						</div>
						<Button
							type='primary'
							htmlType='submit'
							className='btnPrimary w-full sm:w-40 '
							data-testid='loginButton'
						>
							{t('Sign In')}
						</Button>
					</Form>
				</div>
			</div>
			<p className='text-center sm:w-2/3 mx-auto'>
				{t('This product is licensed for Dataon Corporation')} <br />©
				{t('1999 - 2022 Dataon Technologies, All Rights Reserved')}
			</p>
		</>
	)
}

export default CardBody
