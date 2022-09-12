import jwt_decode from 'jwt-decode'
import { createContext, useState } from 'react'

export const AppContext = createContext()

const token = localStorage.getItem('token')
const { userId } = jwt_decode(token)

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
				userId,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
