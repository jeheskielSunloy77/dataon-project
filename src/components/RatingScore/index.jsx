import { customAxios } from '@/utils/index'
import { notification, Rate } from 'antd'
import { useTranslation } from 'react-i18next'

const RatingScore = ({ rating, id }) => {
	const { t } = useTranslation()

	const submitRating = async (value) => {
		await customAxios.put(`trainings/${id}`, {
			id,
			rating: value * 20,
		})
		notification.success({
			message: t('Thank you for your feedback'),
			description: t('Rating submitted successfully'),
		})
	}

	return (
		<div id='ratingContainer'>
			<Rate
				className='cursor-pointer'
				onChange={submitRating}
				defaultValue={rating / 20}
			/>
		</div>
	)
}

export default RatingScore
