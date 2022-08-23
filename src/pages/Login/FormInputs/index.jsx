import { Button, Checkbox, Form, Input } from 'antd'

const usernameRules = [
	{ required: true, message: 'Please input your username!' },
	{
		max: 20,
		min: 5,
		message: 'Username must be between 5 and 20 characters',
	},
	{
		pattern: new RegExp(/^[a-zA-Z0-9]+$/g),
		message: 'Username can only be an alphanumeric value',
	},
]
const passwordRules = [
	{ required: true, message: 'Please input your password!' },
	{
		max: 20,
		min: 5,
		message: 'Password must be between 5 and 20 characters',
	},
]

const FormInputs = () => (
	<>
		<Form.Item name='username' rules={usernameRules}>
			<label>
				Username
				<Input
					className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 placeholder-gray-500 dark:placeholder-gray-400 text-high rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 focus:z-10 sm:text-sm bg-transparent'
					placeholder='Enter Your Username'
					data-testid='usernameInput'
				/>
			</label>
		</Form.Item>
		<Form.Item name='password' rules={passwordRules}>
			<label>
				Password
				<Input
					type='password'
					className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 placeholder-gray-500 dark:placeholder-gray-400 text-high rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 focus:z-10 sm:text-sm bg-transparent'
					placeholder='Enter Your Password'
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
				>
					Remember Me
				</Checkbox>
			</Form.Item>
			<Button type='link' className='ml-auto'>
				Forget Password?
			</Button>
		</div>
	</>
)

export default FormInputs
