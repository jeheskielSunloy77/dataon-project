import mainLogo from '@/assets/mainLogo.png'
import { Select } from 'antd'

const LoginCardHead = () => (
	<div className='flex gap-2'>
		<img src={mainLogo} width='100' height='100' alt='main logo' />
		<span>
			Human Resource Information System
			<h1 className='font-bold text-xl'>SunFish7</h1>
		</span>
		<Select defaultValue='English (EN)' className='ml-auto'>
			<Select.Option value='en'>English(EN)</Select.Option>
			<Select.Option value='id'>Bahasa(ID)</Select.Option>
		</Select>
	</div>
)

export default LoginCardHead
