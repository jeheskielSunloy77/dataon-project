import {
	AllTrainingsCards,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import { useFilteredData } from '@/hooks/index'
import { AppContext } from '@/utils/index'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

const AllTrainings = () => {
	const { dataView, dataLength, setPageLimit, allTrainingData, isSearched } =
		useContext(AppContext)

	const { t } = useTranslation()

	const filteredData = useFilteredData(allTrainingData, true)

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
