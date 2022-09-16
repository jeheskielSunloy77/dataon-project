import mainLogo from '@/assets/mainLogo.svg'
import { notification, Select } from 'antd'
import { useEffect } from 'react'
import loginHadlers from '../loginHandlers'

const CardHeader = () => {
	const { t, setLanguage } = loginHadlers()

	useEffect(() => {
		notification.info({
			message: t('Testing Accounts'),
			description: t(
				'Username: admin, Password: admin and Username: user1, Password: user1'
			),
		})
	}, [])

	return (
		<>
			<div className='flex gap-2'>
				<img
					src={mainLogo}
					width='100'
					height='60'
					alt='main logo'
					data-testid='mainLogo'
				/>
				<span className='hidden sm:block'>
					{t('Human Resource Information System')}
					<h1 className='font-bold text-xl'>SunFish7</h1>
				</span>
				<Select
					defaultValue={localStorage.getItem('lng') || 'en'}
					className='ml-auto'
					data-testid='langSelect'
					onChange={(value) => setLanguage(value)}
				>
					<Select.Option value='en'>English(EN)</Select.Option>
					<Select.Option value='id'>Bahasa(ID)</Select.Option>
				</Select>
			</div>
			<style jsx>{`
				.ant-select-arrow {
					top: 17px !important;
				}
			`}</style>
		</>
	)
}

export default CardHeader
