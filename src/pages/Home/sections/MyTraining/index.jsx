import { MyTrainingCarousel, TrainingSectionTitle } from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import customAxios from '@/utils/axios'
import queryPrams from '@/utils/queryParams'
import { Skeleton } from 'antd'
import moment from 'moment'
import { lazy, Suspense, useContext, useEffect, useState } from 'react'
const TrainingTable = lazy(() => import('@/components/TrainingTable'))

const MyTraining = () => {
	const { dataView, searchParams } = useContext(AppContext)
	const [myTrainingData, setMyTrainingData] = useState(null)

	const url = queryPrams()

	useEffect(() => {
		const fetchData = async () => {
			const response = await customAxios.get(url)
			const myTraining = await Promise.all(
				response.data.data.map(async (training) => {
					const startDate = moment(training.startDate).format('ll-HH-mm')
					const endDate = moment(training.endDate).format('HH-mm')
					const period = `${startDate} - ${endDate}`
					const response = await customAxios.get(`trainings/${training.id}/ratings`)
					const rating =
						response.data.length !== 0 ? Math.round(response.data[0].rate / 20) : 0

					return {
						...training,
						rating,
						period,
					}
				})
			)

			setMyTrainingData(myTraining)
		}
		fetchData()
	}, [searchParams])

	return (
		<section className='sectionContainer'>
			<TrainingSectionTitle
				text='My Trainings Sessions'
				dataLength={myTrainingData?.length}
			/>
			{dataView === 'table' && (
				<Suspense fallback={<Skeleton active />}>
					<TrainingTable tableData={myTrainingData} />
				</Suspense>
			)}
			{dataView === 'cards' && (
				<MyTrainingCarousel carouselData={myTrainingData} />
			)}
		</section>
	)
}

export default MyTraining
