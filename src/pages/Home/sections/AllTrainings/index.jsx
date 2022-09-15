import {
	AllTrainingsCards,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import { AppContext } from '@/utils/index'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const AllTrainings = () => {
	const {
		dataView,
		dataLength,
		setPageLimit,
		allTrainingData,
		searchParams,
		isSearched,
	} = useContext(AppContext)

	const [filteredData, setFilteredData] = useState(null)
	const { t } = useTranslation()

	useEffect(() => {
		const filtered = allTrainingData.filter((training) => {
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
	}, [searchParams, allTrainingData])

	return (
		<section className='sectionContainer'>
			<TrainingSectionTitle
				text={t('All Trainings Sessions')}
				dataLength={isSearched ? filteredData.length : allTrainingData.length}
			/>
			{dataView === 'table' && (
				<TrainingTable
					tableData={isSearched ? filteredData : allTrainingData}
					setPageLimit={setPageLimit}
					infiniteScroll
					dataLength={dataLength}
					filteredDataLength={allTrainingData.length}
				/>
			)}
			{dataView === 'cards' && (
				<AllTrainingsCards
					setPageLimit={setPageLimit}
					cardsData={isSearched ? filteredData : allTrainingData}
					dataLength={dataLength}
				/>
			)}
		</section>
	)
}

export default AllTrainings
