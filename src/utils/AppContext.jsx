import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [dataView, setDataView] = useState('table')

	return (
		<AppContext.Provider
			value={{
				dataView,
				setDataView,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
