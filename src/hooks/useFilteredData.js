import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../utils'

const useFilteredData = (data, infiniteScroll) => {
	const [filteredData, setFilteredData] = useState(null)
	const { searchParams } = useContext(AppContext)

	useEffect(() => {
		const filtered = data.filter((training) => {
			const { name, isOnline, isComplete } = searchParams

			if (
				(name !== null
					? training.name.toLowerCase().includes(name.toLowerCase())
					: true) &&
				(isOnline !== null ? training.isOnline === isOnline : true) &&
				(isComplete !== null ? training.isComplete === isComplete : true)
			) {
				return training
			}
		})
		setFilteredData(filtered)
	}, [searchParams, infiniteScroll && data])

	return filteredData
}

export default useFilteredData
