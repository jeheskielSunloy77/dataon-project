const ButtonPrimary = ({
	text,
	children,
	onClick,
	onSubmit,
	className,
	href,
	target,
	type,
}) => (
	<WithLink href={href} target={target}>
		<button
			type={type || 'button'}
			onClick={onClick}
			onSubmit={onSubmit}
			className={
				className +
				' shadow-lg shadow-emerald-700 hover:shadow-xl hover:shadow-emerald-700 transition-all text-white bg-gradient-to-br from-green-600 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
			}
		>
			{children}
			{text}
		</button>
	</WithLink>
)

const WithLink = ({ children, href, target }) => {
	if (href) {
		return (
			<a href={href} target={target || '_self'}>
				{children}
			</a>
		)
	} else return children
}

export default ButtonPrimary
