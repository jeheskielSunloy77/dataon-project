import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	const { pathname } = useLocation()
	const token = localStorage.getItem('token')

	if (pathname === '/login') return children
	if (pathname !== '/login' && !token) window.location.replace('/login')
	else
		return (
			<>
				<Navbar />
				{children}
				<Footer />
			</>
		)
}

export default Layout