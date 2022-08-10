import NavbarContainer from './NavbarContainer'
import LogoutButton from './NavbarLogout'
import NavbarTab from './NavbarTab'

const Navbar = () => (
	<NavbarContainer>
		<NavbarTab text='Dashboard' href='/' />
		<NavbarTab text='Create Article' href='/createArticle' />
		<NavbarTab text='Detail Article' href='/detailArticle' />
		<NavbarTab text='Edit Article' href='/editArticle' />
		<LogoutButton />
	</NavbarContainer>
)

export default Navbar
