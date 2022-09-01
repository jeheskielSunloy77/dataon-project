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
			<SubmitRatingModal modal={modal} setModal={setModal} score={score} />
		</>
	)
}

const SubmitRatingModal = ({ modal, setModal, score }) => {
	const submitRating = () => {
		setModal(false)
		// TODO: POST rating to the API
	}

	if (modal)
		return createPortal(
			<Modal
				title='Submit Rating'
				visible={modal}
				onOk={submitRating}
				onCancel={() => setModal(false)}
			>
				<Rate className='centerAbsolute' defaultValue={score} />
			</Modal>,
			document.getElementById('ratingContainer')
		)
}

export default RatingScore
