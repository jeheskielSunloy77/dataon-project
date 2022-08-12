import bgImage from '@/assets/background.svg'

const LoginWrapper = ({ children }) => (
	<>
		<div
			className='sm:centerAll h-screen bg-no-repeat bg-center bg-cover'
			style={{ backgroundImage: `url(${bgImage})` }}
			data-testid='loginWrapper'
		>
			{children}
		</div>
		<style jsx='true'>{`
			.ant-carousel .slick-dots li button {
				background-color: blue !important;
				margin-top: 20px !important;
			}
		`}</style>
	</>
)

export default LoginWrapper
