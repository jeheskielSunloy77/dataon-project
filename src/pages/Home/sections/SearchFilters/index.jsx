import { Searchbar } from '@/components/index'
import { AppContext } from '@/utils/index'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Button, Select, Switch } from 'antd'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

const SearchFilters = () => {
	const { dataView, setDataView, setSearchParams } = useContext(AppContext)
	const { t } = useTranslation()

	return (
		<section className='sectionContainer sm:grid grid-cols-5 gap-6'>
			<Searchbar
				label={t('Search Training')}
				placeholder={t('Search Training Name')}
				onSearch={(value) => setSearchParams((prev) => ({ ...prev, name: value }))}
			/>
			<label className='rounded-xl flex flex-col'>
				{t('Event Type')}
				<Select
					showSearch
					placeholder={t('Search Event Type')}
					optionFilterProp='children'
					onChange={(value) => {
						setSearchParams((prev) => ({ ...prev, isOnline: value }))
					}}
					data-testid='eventTypeSelect'
				>
					<Select.Option value={true}>{t('Online Class')}</Select.Option>
					<Select.Option value={false}>{t('Offline Class')}</Select.Option>
				</Select>
			</label>
			<label className='rounded-xl flex flex-col'>
				{t('Event Status')}
				<Select
					showSearch
					placeholder={t('Search Event Status')}
					optionFilterProp='children'
					onChange={(value) =>
						setSearchParams((prev) => ({
							...prev,
							isComplete: value,
						}))
					}
					data-testid='eventStatusSelect'
				>
					<Select.Option value={true}>{t('Event Completed')}</Select.Option>
					<Select.Option value={false}>{t('Upcoming Event')}</Select.Option>
				</Select>
			</label>

			<label className='flex flex-col'>
				{t('Related Jobs Only')}
				<div>
					<Switch defaultChecked />
				</div>
			</label>
			<Button
				className='mt-5 btnDefault'
				icon={
					dataView === 'cards' ? <UnorderedListOutlined /> : <AppstoreOutlined />
				}
				onClick={() =>
					setDataView((prev) => (prev === 'cards' ? 'table' : 'cards'))
				}
			>
				{dataView === 'cards' ? t('View As Table') : t('View As Cards')}
			</Button>
		</section>
	)
}

export default SearchFilters
