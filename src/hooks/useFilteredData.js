import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../utils'

const useFilteredData = (data, infiniteScroll) => {
	const [filteredData, setFilteredData] = useState(null)
	const { searchParams } = useContext(AppContext)
	useEffect(() => {
		const filtered = data.filter((training) => {
			const { name, isOnline, isComplete } = searchParams

			if (
				(name !== ''
					? training.name.toLowerCase().includes(name.toLowerCase())
					: true) &&
				(isOnline !== '' ? training.isOnline === isOnline : true) &&
				isComplete !== '' &&
				training.isComplete === isComplete
			) {
				return training
			}
		})
		setFilteredData(filtered)
	}, [searchParams, infiniteScroll && data])

	return filteredData
}

export default useFilteredData
