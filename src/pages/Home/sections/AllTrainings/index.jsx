import {
	AllTrainingsCards,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import useDebounce from '@/hooks/useDebounce'
import { AppContext } from '@/utils/AppContext'
import customAxios from '@/utils/axios'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'

const AllTrainings = () => {
	const { dataView } = useContext(AppContext)
	const [allTrainingData, setAllTrainingData] = useState([])
	const [pageLimit, setPageLimit] = useState(5)
	const [dataLength, setDataLength] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			let cancelToken

			if (typeof cancelToken != typeof undefined)
				cancelToken.cancel('Canceling Previous Request!')

			cancelToken = axios.CancelToken.source()

			// const allData = await customAxios.get('trainings', {
			// 	cancelToken: cancelToken.token,
			// })
			setDataLength(10)
			const response = await customAxios.get(
				`trainings?page=1&limit=${pageLimit}`,
				{
					cancelToken: cancelToken.token,
				}
			)

			const allTraining = await Promise.all(
				response.data.data.map(async (training) => {
					const period = `${training.startDate} - ${training.endDate.slice(12)}`
					const ratingResponse = await customAxios.get(
						`trainings/${training.id}/ratings`,
						{
							cancelToken: cancelToken.token,
						}
					)
					const rating =
						ratingResponse.data.length !== 0
							? Math.round(ratingResponse.data[0].rate / 20)
							: 0

					return {
						...training,
						rating,
						period,
					}
				})
			)

			setAllTrainingData(allTraining)
		}
		fetchData()
	}, [useDebounce(pageLimit, 2000)])

	return (
		<section className='sectionContainer'>
			<TrainingSectionTitle
				text='All Trainings Sessions'
				dataLength={allTrainingData.length}
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
