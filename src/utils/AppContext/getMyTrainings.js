import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import customAxios from '../axios'
import getUser from '../getUser'
import parsePeriod from '../parsePeriod'
import queryPrams from '../queryParams'

const getMyTrainings = () => {
	const [myTrainingData, setMyTrainingData] = useState([])
	const user = getUser()
	const myTrainingsUrl = queryPrams('trainings', { userId: user?.userId })
	const { pathname } = useLocation()

	useEffect(() => {
		const fetchData = async () => {
			const response = await customAxios.get(myTrainingsUrl)
			const myTraining = response.data.data.map((training) => {
				const period = parsePeriod(training.startDate, training.endDate)

				return {
					...training,
					period,
				}
			})

			setMyTrainingData(myTraining)
		}
		pathname !== '/login' && fetchData()
	}, [myTrainingsUrl])

	return { myTrainingData, setMyTrainingData }
}

export default getMyTrainings
