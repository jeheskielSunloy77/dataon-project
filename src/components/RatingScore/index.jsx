import customAxios from '@/utils/axios'
import { Modal, Rate } from 'antd'
import { useState } from 'react'
import { createPortal } from 'react-dom'

const RatingScore = ({ rating }) => {
	const [modal, setModal] = useState(null)

	return (
		<>
			<div onClick={() => setModal(true)}>
				<Rate className='cursor-pointer' disabled defaultValue={rating.rating} />
			</div>
			<SubmitRatingModal modal={modal} setModal={setModal} rating={rating} />
		</>
	)
}

const SubmitRatingModal = ({ modal, setModal, rating }) => {
	const [rateValue, setRateValue] = useState(rating.rating)

	const submitRating = () => {
		setModal(false)
		customAxios.put(`trainings/${rating.id}/ratings`, {
			rate: rateValue * 20,
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
			document.getElementById('root')
		)
}

export default RatingScore
