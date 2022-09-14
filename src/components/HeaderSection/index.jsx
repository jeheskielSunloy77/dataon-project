import { Breadcrumbs } from '@/components/index'
import { getUser } from '@/utils/index'
import { MoreOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu } from 'antd'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import './Header.css'

const HeaderSection = () => {
	const { pathname } = useLocation()
	const { t } = useTranslation()
	const { role } = getUser()

	const logout = () => {
		localStorage.removeItem('token')
		sessionStorage.removeItem('token')
		window.location.replace('/login')
	}
	const menu = (
		<Menu
			items={[
				{
					key: '1',
					label: t('Logout'),
					onClick: logout,
					danger: true,
				},
			]}
		/>
	)

	return (
		<section className='sectionContainer flex flex-row items-center justify-between'>
			<Breadcrumbs />
			<div className='space-x-2'>
				{pathname === '/' && role === 'admin' && (
					<Button
						type='primary'
						icon={<PlusOutlined />}
						className='btnPrimary'
						href='/new-training'
						data-testid='newTrainingBtn'
					>
						{t('Create New Training')}
					</Button>
				)}
				<Dropdown overlay={menu}>
					<Button className='btnDefault' data-testid='moreBtn'>
						{t('More')}
						<MoreOutlined />
					</Button>
				</Dropdown>
			</div>
		</section>
	)
}

export default HeaderSection
