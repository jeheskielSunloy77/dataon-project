import Container from './Container'

const Card = ({ children, className }) => (
	<Container
		className={
			className + ' bg-gray-50 dark:bg-gray-800 shadow-2xl p-4 rounded-3xl'
		}
	>
		{children}
	</Container>
)

export default Card
