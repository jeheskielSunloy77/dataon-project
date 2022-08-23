import mainLogo from '@/assets/mainLogo.png'
import { Select } from 'antd'

const CardHeader = () => (
	<div className='flex gap-2'>
		<img
			src={mainLogo}
			width='100'
			height='60'
			alt='main logo'
			data-testid='mainLogo'
		/>
		<span>
			Human Resource Information System
			<h1 className='font-bold text-xl'>SunFish7</h1>
		</span>
		<Select defaultValue='en' className='ml-auto' data-testid='langSelect'>
			<Select.Option value='en'>English(EN)</Select.Option>
			<Select.Option value='id'>Bahasa(ID)</Select.Option>
		</Select>
	</div>
)

export default CardHeader
