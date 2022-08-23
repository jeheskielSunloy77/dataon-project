import { createContext, useState } from 'react'
import { data1, data2 } from '../mockData'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [myTrainingData, setMyTrainingData] = useState(data1)
	const [allTrainingData, setAllTrainingData] = useState(data2)
	const [dataView, setDataView] = useState('table')

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
