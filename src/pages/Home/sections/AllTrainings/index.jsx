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
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'

const AllTrainings = () => {
	const { dataView, searchParams } = useContext(AppContext)
	const [allTrainingData, setAllTrainingData] = useState(null)
	const [pageLimit, setPageLimit] = useState(5)
	const [dataLength, setDataLength] = useState(0)
	const url = queryPrams('trainings', searchParams, pageLimit)

	useEffect(() => {
		const fetchData = async () => {
			let cancelToken

			if (typeof cancelToken != typeof undefined)
				cancelToken.cancel('Canceling Previous Request!')

			cancelToken = axios.CancelToken.source()

			const response = await customAxios.get(url, {
				cancelToken: cancelToken.token,
			})
			setDataLength(response.data.total)
			const allTraining = response.data.data.map((training) => {
				const period = parsePeriod(training.startDate, training.endDate)

				return {
					...training,
					period,
				}
			})
			setAllTrainingData(allTraining)
		}
		fetchData()
	}, [useDebounce(pageLimit, 1000), searchParams])

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
				/>
			)}
			{dataView === 'cards' && (
				<AllTrainingsCards
					setPageLimit={setPageLimit}
					cardsData={allTrainingData}
					dataLength={dataLength}
				/>
			)}
		</section>
	)
}

export default AllTrainings
