const prevArrow = ({ onClick }) => (
	<svg
		className='slick-arrow slick-prev absolute top-1/2 -left-5 -translate-y-1/2 z-10'
		onClick={onClick}
		xmlns='http://www.w3.org/2000/svg'
		width={40}
		height={40}
		viewBox='0 0 20 20'
		fill='#9ca3af'
		data-testid='prevArrow'
	>
		<path
			fillRule='evenodd'
			d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
			clipRule='evenodd'
		/>
	</svg>
)

export default prevArrow
