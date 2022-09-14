import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [dataView, setDataView] = useState('table')
	const [searchParams, setSearchParams] = useState({
		name: '',
		isOnline: '',
		isComplete: '',
	})

	return (
		<AppContext.Provider
			value={{
				dataView,
				setDataView,
				setSearchParams,
				searchParams,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
