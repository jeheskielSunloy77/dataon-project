import customAxios from '@/utils/axios'
import { Modal, Rate } from 'antd'
import { useState } from 'react'
import { createPortal } from 'react-dom'

const RatingScore = ({ score }) => {
	const [modal, setModal] = useState(null)

	return (
		<>
			<div id='ratingContainer' onClick={() => setModal(true)}>
				<Rate className='cursor-pointer' disabled defaultValue={score.rating} />
			</div>
			<SubmitRatingModal modal={modal} setModal={setModal} score={score} />
		</>
	)
}

const SubmitRatingModal = ({ modal, setModal, score }) => {
	const [rateValue, setRateValue] = useState(score.rating)

	const submitRating = () => {
		setModal(false)
		customAxios.post(`trainings/${score.id}/ratings`, {
			trainingId: score.id,
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
			document.getElementById('ratingContainer')
		)
}

export default RatingScore
