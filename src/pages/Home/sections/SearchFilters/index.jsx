import { Searchbar } from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Button, Select, Switch } from 'antd'
import moment from 'moment'
import { useContext } from 'react'

const SearchFilters = () => {
	const { dataView, setDataView, setSearchParams } = useContext(AppContext)

	const changeView = () =>
		setDataView((prev) => (prev === 'cards' ? 'table' : 'cards'))

	return (
		<section className='sectionContainer sm:grid grid-cols-5 gap-6'>
			<Searchbar
				label='Search Training'
				placeholder='Search Training'
				onSearch={(value) => setSearchParams((prev) => ({ ...prev, name: value }))}
			/>
			<label className='rounded-xl flex flex-col'>
				Event Type
				<Select
					showSearch
					placeholder='Search Event Type'
					optionFilterProp='children'
					onSearch={(value) =>
						setSearchParams((prev) => ({ ...prev, isOnline: value }))
					}
					data-testid='eventTypeSelect'
				>
					<Select.Option value={true}>Online Class</Select.Option>
					<Select.Option value={false}>Offline Class</Select.Option>
				</Select>
			</label>
			<label className='rounded-xl flex flex-col'>
				Event Status
				<Select
					showSearch
					placeholder='Search Event Status'
					optionFilterProp='children'
					onSearch={(value) =>
						setSearchParams((prev) => ({
							...prev,
							startDate: value ? moment(new Date()).format() : '',
						}))
					}
					data-testid='eventStatusSelect'
				>
					<Select.Option value={true}>Event Completed</Select.Option>
					<Select.Option value={false}>Event Started</Select.Option>
				</Select>
			</label>

			<label className='flex flex-col'>
				Related Jobs Only
				<div>
					<Switch defaultChecked />
				</div>
			</label>
			<Button
				className='mt-5 btnDefault'
				icon={
					dataView === 'cards' ? <UnorderedListOutlined /> : <AppstoreOutlined />
				}
				onClick={changeView}
			>
				View As {dataView === 'cards' ? 'Table' : 'Cards'}
			</Button>
		</section>
	)
}

export default SearchFilters
