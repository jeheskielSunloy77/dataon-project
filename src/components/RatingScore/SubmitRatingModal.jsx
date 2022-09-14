import customAxios from '@/utils/axios'
import { Modal, notification, Rate } from 'antd'
import { useState } from 'react'
import { createPortal } from 'react-dom'

const SubmitRatingModal = ({ modal, setModal, rating, id, element }) => {
	const [ratingValue, setRatingValue] = useState(rating / 20)

	const submitRating = async () => {
		setModal(false)
		await customAxios.put(`trainings/${id}`, {
			id,
			rating: ratingValue * 20,
		})
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
					defaultValue={ratingValue}
					onChange={(value) => setRatingValue(value)}
				/>
			</Modal>,
			document.querySelector(element)
		)
}

export default SubmitRatingModal
