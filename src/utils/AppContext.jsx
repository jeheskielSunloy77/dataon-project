import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const initialState = localStorage.getItem('token') + 'ContextAPIState'
	const [state, setState] = useState(initialState)

	return (
		<AppContext.Provider value={{ state, setState }}>
			{children}
		</AppContext.Provider>
	)
}
