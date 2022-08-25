import {
	MyTrainingCarousel,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import customAxios from '@/utils/axios'
import jwt_decode from 'jwt-decode'
import { useContext, useEffect, useState } from 'react'

const MyTraining = () => {
	const { dataView, searchParams } = useContext(AppContext)
	const [myTrainingData, setMyTrainingData] = useState([])

	useEffect(() => {
		const endpoint = searchParams
			? `trainings/?search=${searchParams.searchTraining}`
			: 'trainings'

		const fetchData = async () => {
			const token = localStorage.getItem('token')
			const { userId } = jwt_decode(token)
			const response = await customAxios.get(endpoint)
			const data = response.data.data
			const allTraining = data.map((item) => {
				const period = `${item.startDate} - ${item.endDate.slice(12)}`

				return {
					...item,
					period,
				}
			})
			const myTraining = allTraining.filter((item) => item.userId === userId)
			setMyTrainingData(myTraining)
		}
		fetchData()
	}, [searchParams])

	return (
		<section className='sectionContainer'>
			<TrainingSectionTitle
				text='My Trainings Sessions'
				dataLength={myTrainingData.length}
			/>
			{dataView === 'table' && <TrainingTable tableData={myTrainingData} />}
			{dataView === 'cards' && (
				<MyTrainingCarousel carouselData={myTrainingData} />
			)}
		</section>
	)
}

export default MyTraining
