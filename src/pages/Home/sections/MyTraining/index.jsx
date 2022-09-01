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
	const { dataView } = useContext(AppContext)
	const [myTrainingData, setMyTrainingData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('token')
			const { userId } = jwt_decode(token)
			const response = await customAxios.get(`trainings?userId=${userId}`)
			const responseData = response.data.data
			const data = responseData.map(async (training) => {
				const response = await customAxios.get(`trainings/${training.id}/ratings`)

				return response.data
			})
			const result = await Promise.all(data)
			const mergedData = responseData.map((training, index) => {
				const rating =
					result[index].length !== 0 ? Math.round(result[index][0].rate / 20) : 0

				return {
					...training,
					rating,
				}
			})

			setMyTrainingData(mergedData)
		}
		fetchData()
	}, [])

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
