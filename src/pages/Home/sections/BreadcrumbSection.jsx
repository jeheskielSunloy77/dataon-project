import { Breadcrumbs } from '@/components/index'
import { MoreOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const BreadcrumbSection = () => (
	<section className='sectionContainer flex flex-col sm:flex-row items-center sm:justify-between '>
		<Breadcrumbs />
		<div className='space-x-2 sm:mt-4'>
			<Button
				type='primary'
				icon={<PlusOutlined />}
				className='btnPrimary'
				href='/newTraining'
				data-testid='newTrainingBtn'
			>
				Create New Training
			</Button>
			<Button icon={<MoreOutlined />} className='btnDefault' data-testid='moreBtn'>
				More
			</Button>
		</div>
	</section>
)

export default BreadcrumbSection