import {
	MyTrainingCarousel,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import customAxios from '@/utils/axios'
import parsePeriod from '@/utils/parsePeriod'
import queryPrams from '@/utils/queryParams'
import jwt_decode from 'jwt-decode'
import { useContext, useEffect, useState } from 'react'

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
				const period = parsePeriod(training.startDate, training.endDate)

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
			{dataView === 'table' && <TrainingTable tableData={myTrainingData} />}
			{dataView === 'cards' && (
				<MyTrainingCarousel carouselData={myTrainingData} />
			)}
		</section>
	)
}

export default MyTraining
