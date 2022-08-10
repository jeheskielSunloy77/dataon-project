import { useLocation } from 'react-router-dom'

const NavbarTab = ({ children, text, href }) => {
	const { pathname } = useLocation()
	const active =
		'text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6'
	const regular =
		'border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'

	return (
		<a href={href} className={pathname === href ? active : regular}>
			{text} {children}
		</a>
	)
}

export default NavbarTab
