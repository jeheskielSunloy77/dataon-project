import {
	AllTrainingsCards,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import customAxios from '@/utils/axios'
import { useContext, useEffect, useState } from 'react'

const AllTrainings = () => {
	const { dataView } = useContext(AppContext)
	const [allTrainingData, setAllTrainingData] = useState([])
	const [pageLimit, setPageLimit] = useState(5)
	const [dataLength, setDataLength] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			const dataLength = await customAxios.get('trainings')
			setDataLength(dataLength.data.total)
			const response = await customAxios.get(`trainings?page=1&limit=${pageLimit}`)
			const data = response.data.data
			const allTraining = data.map((item) => {
				const period = `${item.startDate} - ${item.endDate.slice(12)}`

				return {
					...item,
					period,
				}
			})
			setAllTrainingData(allTraining)
		}
		fetchData()
	}, [pageLimit])

	return (
		<section className='sectionContainer'>
			<TrainingSectionTitle
				text='All Trainings Sessions'
				dataLength={allTrainingData.length}
			/>
			{dataView === 'table' && (
				<TrainingTable
					tableData={allTrainingData}
					setPageLimit={setPageLimit}
					infiniteScroll
					dataLength={dataLength}
				/>
			)}
			{dataView === 'cards' && (
				<AllTrainingsCards
					setPageLimit={setPageLimit}
					cardsData={allTrainingData}
				/>
			)}
		</section>
	)
}

export default AllTrainings
