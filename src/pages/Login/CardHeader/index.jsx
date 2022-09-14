import mainLogo from '@/assets/mainLogo.svg'
import { Select } from 'antd'
import { useTranslation } from 'react-i18next'

const CardHeader = () => {
	const { t, i18n } = useTranslation()

	const setLanguage = (value) => {
		i18n.changeLanguage(value)
		localStorage.setItem('lng', value)
	}

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
				<span>
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
