import { Breadcrumbs } from '@/components/index'
import { MoreOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useLocation } from 'react-router-dom'
import './Header.css'

const HeaderSection = () => {
	const { pathname } = useLocation()

	return (
		<section className='sectionContainer flex flex-col sm:flex-row items-center sm:justify-between '>
			<Breadcrumbs />
			<div className='space-x-2'>
				{pathname === '/' && (
					<Button
						type='primary'
						icon={<PlusOutlined />}
						className='btnPrimary'
						href='/newTraining'
						data-testid='newTrainingBtn'
					>
						Create New Training
					</Button>
				)}
				<Button
					icon={<MoreOutlined />}
					className='btnDefault'
					data-testid='moreBtn'
				>
					More
				</Button>
			</div>
		</section>
	)
}

export default HeaderSection
