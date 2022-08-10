import { Checkbox, Form, Input } from 'antd'

export const Inputs = () => (
	<>
		<Form.Item name='username'>
			<Input
				required
				className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 placeholder-gray-500 dark:placeholder-gray-400 text-high rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 focus:z-10 sm:text-sm bg-transparent'
				placeholder='Username'
			/>
		</Form.Item>
		<Form.Item name='password'>
			<Input
				type='password'
				required
				className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 placeholder-gray-500 dark:placeholder-gray-400 text-high rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 focus:z-10 sm:text-sm bg-transparent'
				placeholder='Password'
			/>
		</Form.Item>
		<Form.Item Item name='rememberMe' valuePropName='checked'>
			<Checkbox className='w-full' defaultChecked>
				Remember Me
			</Checkbox>
		</Form.Item>
	</>
)
