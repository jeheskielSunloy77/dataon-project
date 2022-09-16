import { createContext, useState } from 'react'
import getAllTrainings from './getAllTrainings'
import getMyTrainings from './getMyTrainings'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [dataView, setDataView] = useState('table')
	const [searchParams, setSearchParams] = useState({
		name: '',
		isOnline: '',
		isComplete: '',
	})
	const isSearched = Object.values(searchParams).some((param) => param !== '')
	const { myTrainingData, setMyTrainingData } = getMyTrainings()
	const { allTrainingData, setPageLimit, dataLength } = getAllTrainings()

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
