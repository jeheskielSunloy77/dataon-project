import {
	MyTrainingCarousel,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import { AppContext } from '@/utils/index'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const MyTraining = () => {
	const { dataView, myTrainingData, loading, searchParams } =
		useContext(AppContext)
	const [filteredData, setFilteredData] = useState(null)
	const isSearched = Object.values(searchParams).some((param) => param !== '')
	const { t } = useTranslation()

	useEffect(() => {
		const filtered = myTrainingData.filter((training) => {
			const { name, isOnline, isComplete } = searchParams

			if (
				(name !== ''
					? training.name.toLowerCase().includes(name.toLowerCase())
					: true) &&
				(isOnline !== '' ? training.isOnline === isOnline : true) &&
				isComplete !== '' &&
				training.isComplete === isComplete
			) {
				return training
			}
		})
		setFilteredData(filtered)
	}, [searchParams])

	return (
		<section className='sectionContainer myTraining'>
			<TrainingSectionTitle
				text={t('My Trainings Sessions')}
				dataLength={myTrainingData?.length}
			/>
			{dataView === 'table' && (
				<TrainingTable
					tableData={isSearched ? filteredData : myTrainingData}
					loading={loading}
				/>
			)}
			{dataView === 'cards' && (
				<MyTrainingCarousel
					carouselData={isSearched ? filteredData : myTrainingData}
					loading={loading}
				/>
			)}
		</section>
	)
}

export default MyTraining
