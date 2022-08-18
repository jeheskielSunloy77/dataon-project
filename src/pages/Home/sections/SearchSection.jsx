import { Searchbar } from '@/components/index'
import { UnorderedListOutlined } from '@ant-design/icons'
import { Button, Switch } from 'antd'

const SearchSection = () => (
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
		<Button className='mt-5 btnDefault' icon={<UnorderedListOutlined />}>
			View As List
		</Button>
	</section>
)

export default SearchSection
