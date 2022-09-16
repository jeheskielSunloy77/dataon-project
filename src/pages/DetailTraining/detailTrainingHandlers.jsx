import { customAxios, getUser, trainingDataShape } from '@/utils/index'
import { Button, notification } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

const detailTrainingHandlers = () => {
	const [trainingData, setTrainingData] = useState(trainingDataShape)
	const [isTaken, setIsTaken] = useState(null)
	const { id } = useParams()
	const navigate = useNavigate()
	const { t } = useTranslation()
	const user = getUser()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await customAxios.get(`/trainings/${id}`)
				const data = response.data.data
				setTrainingData(data)
				data.userId === user?.userId && setIsTaken(true)
			} catch (error) {
				throw new Error(error)
			}
		}
		fetchData()
	}, [])

	const deleteTraining = () => {
		if (user?.role === 'admin') {
			notification.warn({
				message: t('Are you sure you want to delete this training?'),
				btn: (
					<Button
						type='primary'
						className='rounded-lg px-8 btnPrimary'
						onClick={() => {
							customAxios.delete(`trainings/${id}`)
							navigate('/')
						}}
					>
						{t('Confirm')}
					</Button>
				),
				onClose: close(),
			})
		} else
			notification.warning({
				message: t('You are not authorized to delete this training'),
				description: t(
					'Only admin can delete trainings, please contact admin for more information.'
				),
			})
	}

	const editTraining = () => {
		if (user?.role === 'admin') {
			navigate(`/edit-training/${id}`)
		} else
			notification.warning({
				message: t('You are not authorized to edit this training'),
				description: t(
					'Only admin can edit trainings, please contact admin for more information.'
				),
			})
	}

	const joinClass = async () => {
		await customAxios.put(`/trainings/${id}`, { userId: user.userId })
		notification.success({
			message: t('Thank you for joining this training'),
			description: t(
				'You can check your training in My Training page, And we will see you there!'
			),
		})
		setIsTaken(true)
	}

	return {
		editTraining,
		deleteTraining,
		joinClass,
		isTaken,
		trainingData,
		t,
	}
}

export default detailTrainingHandlers
