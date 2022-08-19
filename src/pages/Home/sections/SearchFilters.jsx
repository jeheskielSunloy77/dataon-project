import { Searchbar } from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Button, Switch } from 'antd'
import { useContext } from 'react'

const SearchFilters = () => {
	const { dataView, setDataView } = useContext(AppContext)

	const changeView = () =>
		setDataView((prev) => (prev === 'cards' ? 'table' : 'cards'))

	return (
		<section className='sectionContainer sm:grid grid-cols-5 gap-6'>
			<Searchbar label='Search Training' placeholder='Search Training' />
			<Searchbar label='Event Type' placeholder='Search Event Type' />
			<Searchbar label='Status' placeholder='Search Status' />
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
