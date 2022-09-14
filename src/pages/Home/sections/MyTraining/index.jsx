import {
	MyTrainingCarousel,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import {
	AppContext,
	customAxios,
	getUser,
	parsePeriod,
	queryPrams,
} from '@/utils/index'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const MyTraining = () => {
	const { dataView, searchParams } = useContext(AppContext)
	const [myTrainingData, setMyTrainingData] = useState([])
	const [loading, setLoading] = useState(true)
	const { userId } = getUser()
	const { t } = useTranslation()

	const myTrainingSearchParams = { userId, ...searchParams }
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
				text={t('My Trainings Sessions')}
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
