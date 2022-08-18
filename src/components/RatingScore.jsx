import { Icon } from '.'

const RatingScore = ({ score }) => {
	const stars = [...Array(5)].map((_, index) => (
		<Icon key={index} name='Star' active={index < score} />
	))

	return stars
}

export default RatingScore
