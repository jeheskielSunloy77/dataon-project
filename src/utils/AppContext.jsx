import { createContext, useEffect, useState } from 'react'
import customAxios from './axios'
import getUser from './getUser'
import parsePeriod from './parsePeriod'
import queryPrams from './queryParams'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [dataView, setDataView] = useState('table')
	const [searchParams, setSearchParams] = useState({
		name: '',
		isOnline: '',
		isComplete: '',
	})
	const isSearched = Object.values(searchParams).some((param) => param !== '')

	const [myTrainingData, setMyTrainingData] = useState([])
	const user = getUser()
	const myTrainingsUrl = queryPrams('trainings', { userId: user?.userId })

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
		fetchData()
	}, [])

	const [allTrainingData, setAllTrainingData] = useState([])
	const [pageLimit, setPageLimit] = useState(10)
	const [dataLength, setDataLength] = useState(0)
	const allTrainingsUrl = queryPrams('trainings', { page: 1, limit: pageLimit })

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

	return (
		<AppContext.Provider
			value={{
				dataView,
				setDataView,
				setSearchParams,
				searchParams,
				myTrainingData,
				setMyTrainingData,
				allTrainingData,
				dataLength,
				setPageLimit,
				isSearched,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
