const NavbarContainer = ({ children }) => (
	<nav className='bg-white shadow dark:bg-gray-800'>
		<div className='container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300'>
			{children}
		</div>
	</nav>
)

export default NavbarContainer
