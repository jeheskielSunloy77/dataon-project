import { Breadcrumbs } from '@/components/index'
import { MoreOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export const HomeBreadcrumbSection = () => (
	<section className='sectionContainer flex justify-between '>
		<Breadcrumbs />
		<div className='space-x-2'>
			<Button
				type='primary'
				icon={<PlusOutlined />}
				className='btnPrimary'
				href='/newTraining'
			>
				Create New Training
			</Button>
			<Button icon={<MoreOutlined />} className='btnDefault'>
				More
			</Button>
		</div>
	</section>
)
