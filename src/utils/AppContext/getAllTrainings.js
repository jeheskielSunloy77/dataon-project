import { useEffect, useState } from 'react'
import customAxios from '../axios'
import parsePeriod from '../parsePeriod'
import queryPrams from '../queryParams'

const getAllTrainings = (isSearched) => {
	const [allTrainingData, setAllTrainingData] = useState([])
	const [pageLimit, setPageLimit] = useState(10)
	const [dataLength, setDataLength] = useState(0)
	const allTrainingsUrl = queryPrams(
		'trainings',
		!isSearched
			? {
				page: 1,
				limit: pageLimit,
			}
			: null
	)
	
	useEffect(() => {
		const fetchData = async () => {
			const response = await customAxios.get(allTrainingsUrl)
			const allTraining = response.data.data.map((training) => {
				const period = parsePeriod(training.startDate, training.endDate)

				return {
					...training,
					period,
				}
			})
			setAllTrainingData(allTraining)
			setDataLength(response.data.total)
		}
		fetchData()
	}, [allTrainingsUrl])

	return {
		allTrainingData,
		setPageLimit,
		dataLength,
	}
}

export default getAllTrainings
