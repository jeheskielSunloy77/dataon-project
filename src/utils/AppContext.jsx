import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [dataView, setDataView] = useState('table')
	const [searchParams, setSearchParams] = useState(null)

	return (
		<AppContext.Provider
			value={{
				dataView,
				setDataView,
				searchParams,
				setSearchParams,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
