import { LogoutOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const navigatePage = ({ key }) => {
		if (key === 'logout') {
			localStorage.removeItem('token')
			navigate('/login')
		} else navigate(key)
	}

	return (
		<Menu
			mode='horizontal'
			defaultSelectedKeys={[pathname]}
			onSelect={navigatePage}
			className='justify-center'
			items={[
				{ key: '/', label: 'Dashboard' },
				{ key: '/createArticle', label: 'Create Article' },
				{ key: '/detailArticle', label: 'Detail Article' },
				{ key: '/editArticle', label: 'Edit Article' },
				{
					key: 'logout',
					label: 'Logout',
					icon: <LogoutOutlined />,
					className: 'flex justify-center items-center',
				},
			]}
		/>
	)
}

export default Navbar
