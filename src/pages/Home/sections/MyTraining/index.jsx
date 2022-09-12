import {
	MyTrainingCarousel,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import customAxios from '@/utils/axios'
import parsePeriod from '@/utils/parsePeriod'
import queryPrams from '@/utils/queryParams'
import { useCallback, useContext, useEffect, useState } from 'react'

const MyTraining = () => {
	const { dataView, searchParams, userId } = useContext(AppContext)
	const [myTrainingData, setMyTrainingData] = useState(null)
	const [loading, setLoading] = useState(true)

	const myTrainingSearchParams = { ...searchParams, userId }
	const url = queryPrams('trainings', myTrainingSearchParams)

	const fetchData = useCallback(async () => {
		setLoading(true)
		const response = await customAxios.get(url)
		const myTraining = response.data.data.map((training) => {
			const period = parsePeriod(training.startDate, training.endDate)

			return {
				...training,
				period,
			}
		})

		setMyTrainingData(myTraining)
		setLoading(false)
	}, [url])

	useEffect(() => {
		fetchData()
	}, [url])

	return (
		<section className='sectionContainer myTraining'>
			<TrainingSectionTitle
				text='My Trainings Sessions'
				dataLength={myTrainingData?.length}
			/>
			{dataView === 'table' && (
				<TrainingTable tableData={myTrainingData} loading={loading} />
			)}
			{dataView === 'cards' && (
				<MyTrainingCarousel carouselData={myTrainingData} loading={loading} />
			)}
		</section>
	)
}

export default MyTraining
