import {
	AllTrainingsCards,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import useDebounce from '@/hooks/useDebounce'
import { AppContext, customAxios, parsePeriod, queryPrams } from '@/utils/index'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const AllTrainings = () => {
	const { dataView, searchParams } = useContext(AppContext)
	const [allTrainingData, setAllTrainingData] = useState([])
	const [pageLimit, setPageLimit] = useState(10)
	const [dataLength, setDataLength] = useState(0)
	const [loading, setLoading] = useState(true)
	const allTrainingSearchParams = { ...searchParams, page: 1, limit: pageLimit }
	const url = queryPrams('trainings', allTrainingSearchParams)

	const { t } = useTranslation()

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
				text={t('All Trainings Sessions')}
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
