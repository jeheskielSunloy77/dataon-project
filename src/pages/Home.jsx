import { Breadcrumbs } from '@/components/index'
import { MoreOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'

const Home = () => (
	<div className='pageContainer'>
		<div className='flex justify-between bg-white py-2 rounded-lg container mx-auto px-6'>
			<Breadcrumbs />
			<ButtonGroup className='space-x-2'>
				<Button
					type='primary'
					icon={<PlusOutlined />}
					style={{ borderRadius: '6px' }}
					href='/newTraining'
				>
					Create New Training
				</Button>
				<Button icon={<MoreOutlined />} style={{ borderRadius: '6px' }}>
					More
				</Button>
			</ButtonGroup>
		</div>
	</div>
)

export default Home
