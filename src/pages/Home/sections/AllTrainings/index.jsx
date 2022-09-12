import {
	AllTrainingsCards,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import useDebounce from '@/hooks/useDebounce'
import { AppContext } from '@/utils/AppContext'
import customAxios from '@/utils/axios'
import parsePeriod from '@/utils/parsePeriod'
import queryPrams from '@/utils/queryParams'
import { useContext, useEffect, useState } from 'react'

const AllTrainings = () => {
	const { dataView, searchParams } = useContext(AppContext)
	const [allTrainingData, setAllTrainingData] = useState(null)
	const [pageLimit, setPageLimit] = useState(5)
	const [dataLength, setDataLength] = useState(0)
	const [loading, setLoading] = useState(true)
	const allTrainingSearchParams = { ...searchParams, page: 1, limit: pageLimit }
	const url = queryPrams('trainings', allTrainingSearchParams)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const response = await customAxios.get(url)
			setDataLength(response.data.total)
			const allTraining = response.data.data.map((training) => {
				const period = parsePeriod(training.startDate, training.endDate)

				return {
					...training,
					period,
				}
			})
			setAllTrainingData(allTraining)
			setLoading(false)
		}
		fetchData()
	}, [useDebounce(url, 1000)])

	return (
		<section className='sectionContainer'>
			<TrainingSectionTitle
				text='All Trainings Sessions'
				dataLength={dataLength}
			/>
			{dataView === 'table' && (
				<TrainingTable
					tableData={allTrainingData}
					setPageLimit={setPageLimit}
					infiniteScroll
					dataLength={dataLength}
					loading={loading}
				/>
			)}
			{dataView === 'cards' && (
				<AllTrainingsCards
					setPageLimit={setPageLimit}
					cardsData={allTrainingData}
					dataLength={dataLength}
					loading={loading}
				/>
			)}
		</section>
	)
}

export default AllTrainings
