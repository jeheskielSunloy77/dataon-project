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
		>
			<Menu.Item key='/'>Dashboard</Menu.Item>
			<Menu.Item key='/createArticle'>Create Article</Menu.Item>
			<Menu.Item key='/detailArticle'>Detail Article</Menu.Item>
			<Menu.Item key='/editArticle'>Edit Article</Menu.Item>
			<Menu.Item
				key='logout'
				icon={<LogoutOutlined />}
				className='flex justify-center items-center'
			>
				Logout
			</Menu.Item>
		</Menu>
	)
}

export default Navbar
