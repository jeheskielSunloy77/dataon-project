import jwt_decode from 'jwt-decode'
import { createContext, useEffect, useState } from 'react'
import { data2 } from '../mockData'
import customAxios from './axios'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [myTrainingData, setMyTrainingData] = useState([])
	const [allTrainingData, setAllTrainingData] = useState(data2)
	const [dataView, setDataView] = useState('table')

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('token')
			const { userId } = jwt_decode(token)
			const response = await customAxios.get('trainings')
			const data = response.data.data
			const allTraining = data.map((item) => {
				const period = `${item.startDate} - ${item.endDate.slice(12)}`

				return {
					...item,
					period,
				}
			})
			const myTraining = allTraining.filter((item) => item.userId === userId)
			setMyTrainingData(myTraining)
		}
		fetchData()
	}, [])

	return (
		<AppContext.Provider
			value={{
				myTrainingData,
				setMyTrainingData,
				dataView,
				setDataView,
				allTrainingData,
				setAllTrainingData,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
