import bgImage from '@/assets/background.svg'

const Wrapper = ({ children }) => (
	<div
		className='sm:centerAll h-screen bg-no-repeat bg-center bg-cover'
		style={{ backgroundImage: `url(${bgImage})` }}
		data-testid='loginWrapper'
	>
		{children}
	</div>
)

export default Wrapper
