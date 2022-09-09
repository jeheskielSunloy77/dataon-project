import customAxios from '@/utils/axios'
import { Modal, Rate } from 'antd'
import { memo, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const ScoreRating = ({ id }) => {
	const [modal, setModal] = useState(null)
	const [rating, setRating] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await customAxios.get(`trainings/${id}/ratings`)
			const rating =
				response.data.length !== 0 ? Math.round(response.data[0].rate / 20) : 0
			setRating(rating)
		}
		fetchData()
	}, [])

	if (rating === null) return null
	else
		return (
			<>
				<div id='ratingContainer' onClick={() => setModal(true)}>
					<Rate className='cursor-pointer' disabled defaultValue={rating} />
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

	const submitRating = () => {
		setModal(false)
		customAxios.post(`trainings/${id}/ratings`, {
			trainingId: id,
			rate: rateValue * 20,
		})

		window.location.reload()
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

const RatingScore = memo(ScoreRating)

export default RatingScore
