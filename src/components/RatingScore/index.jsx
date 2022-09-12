import customAxios from '@/utils/axios'
import { Modal, notification, Rate } from 'antd'
import { useState } from 'react'
import { createPortal } from 'react-dom'

const RatingScore = ({ rating, id }) => {
	const [modal, setModal] = useState(null)

	if (!rating) return null
	else
		return (
			<>
				<div id='ratingContainer' onClick={() => setModal(true)}>
					<Rate className='cursor-pointer' disabled defaultValue={rating / 20} />
				</div>
				<SubmitRatingModal
					modal={modal}
					setModal={setModal}
					rating={rating}
					id={id}
				/>
			</>
		)
}

const SubmitRatingModal = ({ modal, setModal, rating, id }) => {
	const [rateValue, setRateValue] = useState(rating)

	const submitRating = async () => {
		setModal(false)
		await customAxios.put(`trainings/${id}`, {
			id,
			rating: rateValue * 20,
		})
		window.location.reload()
		notification.success({
			message: 'Thank you for your feedback',
			description: 'Rating submitted successfully',
		})
	}

	if (modal)
		return createPortal(
			<Modal
				title='Submit Rating'
				visible={modal}
				onOk={submitRating}
				onCancel={() => setModal(false)}
			>
				<Rate
					className='centerAbsolute'
					defaultValue={rateValue}
					value={rateValue}
					onChange={(value) => setRateValue(value)}
				/>
			</Modal>,
			document.getElementById('ratingContainer')
		)
}

export default RatingScore
