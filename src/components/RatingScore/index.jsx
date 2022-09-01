import customAxios from '@/utils/axios'
import { Modal, Rate } from 'antd'
import { useState } from 'react'
import { createPortal } from 'react-dom'

const RatingScore = ({ score }) => {
	const [modal, setModal] = useState(null)

	return (
		<>
			<div id='ratingContainer' onClick={() => setModal(true)}>
				<Rate className='cursor-pointer' disabled defaultValue={score} />
			</div>
			<SubmitRatingModal modal={modal} setModal={setModal} rating={score} />
		</>
	)
}

const SubmitRatingModal = ({ modal, setModal, score }) => {
	const [rateValue, setRateValue] = useState(score.rating)

	const submitRating = () => {
		setModal(false)
		customAxios.put(`trainings/${score.id}/ratings`, {
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
