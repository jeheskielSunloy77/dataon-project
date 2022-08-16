import { StarIcon } from '.'

const RatingScore = ({ score }) => {
	const stars = [...Array(5)].map((_, index) => (
		<StarIcon key={index} active={index < score} />
	))

	return stars
}

export default RatingScore
