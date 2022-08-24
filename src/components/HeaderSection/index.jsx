import { Breadcrumbs } from '@/components/index'
import { MoreOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

const HeaderSection = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const logout = () => {
		localStorage.removeItem('token')
		navigate('/login')
	}
	const menu = (
		<Menu
			items={[
				{
					key: '1',
					label: 'Logout',
					onClick: logout,
				},
			]}
		/>
	)

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
				<Dropdown overlay={menu}>
					<Button className='btnDefault' data-testid='moreBtn'>
						More
						<MoreOutlined />
					</Button>
				</Dropdown>
			</div>
		</section>
	)
}

export default HeaderSection
