import { customAxios, getUser } from '@/utils/index'
import { Button, notification } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

const upsertTrainingHandlers = () => {
	const isEditPage = window.location.pathname.includes('/edit-training')
	const [formData, setFormData] = useState(null)
	const navigate = useNavigate()
	const params = useParams()
	const { t } = useTranslation()
	const { role, userId } = getUser()

	const fetchData = async () => {
		const response = await customAxios.get(`trainings/${params.id}`)
		const { startDate, endDate, ...rest } = response.data.data
		const date = [moment(startDate), moment(endDate)]
		const data = {
			date,
			...rest,
		}
		setFormData(data)
	}

	useEffect(() => {
		role === 'admin'
			? isEditPage
				? fetchData()
				: setFormData({})
			: navigate('/')
	}, [])

	const upsertData = (value) => {
		const { date, ...rest } = value
		const data = {
			...rest,
			userId,
			startDate: moment(date[0]).format(),
			endDate: moment(date[1]).format(),
		}

		if (isEditPage) customAxios.put(`trainings/${params.id}`, data)
		else customAxios.post('trainings', data)

		window.location.href = '/'
	}

	const onFormFinish = (value) => {
		notification.open({
			message: t('Are you sure you want to save this training?'),
			btn: (
				<Button
					type='primary'
					className='rounded-lg px-8 btnPrimary'
					onClick={() => upsertData(value)}
				>
					{t('Confirm')}
				</Button>
			),
			key: 'confirm',
			onClose: close(),
		})
	}

	return { formData, onFormFinish, t, isEditPage }
}

export default upsertTrainingHandlers
