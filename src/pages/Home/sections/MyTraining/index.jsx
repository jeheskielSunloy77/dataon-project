import { MyTrainingCarousel, TrainingSectionTitle } from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import customAxios from '@/utils/axios'
import queryPrams from '@/utils/queryParams'
import { Skeleton } from 'antd'
import jwt_decode from 'jwt-decode'
import moment from 'moment'
import { lazy, Suspense, useContext, useEffect, useState } from 'react'
const TrainingTable = lazy(() => import('@/components/TrainingTable'))

const MyTraining = () => {
	const { dataView, searchParams } = useContext(AppContext)
	const [myTrainingData, setMyTrainingData] = useState(null)

	const token = localStorage.getItem('token')
	const { userId } = jwt_decode(token)
	const myTrainingSearchParams = { ...searchParams, userId }
	const url = queryPrams('trainings', myTrainingSearchParams)

	useEffect(() => {
		const fetchData = async () => {
			const response = await customAxios.get(url)
			const myTraining = response.data.data.map((training) => {
				const startDate = moment(training.startDate).format('ll-HH-mm')
				const endDate = moment(training.endDate).format('HH-mm')
				const period = `${startDate} - ${endDate}`

				return {
					...training,
					period,
				}
			})

			setMyTrainingData(myTraining)
		}
		fetchData()
	}, [searchParams])

	return (
		<section className='sectionContainer myTraining'>
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
