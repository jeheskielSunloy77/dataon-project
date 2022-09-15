import {
	MyTrainingCarousel,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import { useFilteredData } from '@/hooks/index'
import { AppContext } from '@/utils/index'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

const MyTraining = () => {
	const { dataView, myTrainingData, loading, isSearched } =
		useContext(AppContext)
	const { t } = useTranslation()
	const filteredData = useFilteredData(myTrainingData)
	const data = isSearched ? filteredData : myTrainingData

	return (
		<section className='sectionContainer myTraining'>
			<TrainingSectionTitle
				text={t('My Trainings Sessions')}
				dataLength={data.length}
			/>
			{dataView === 'table' && (
				<TrainingTable tableData={data} loading={loading} />
			)}
			{dataView === 'cards' && (
				<MyTrainingCarousel carouselData={data} loading={loading} />
			)}
		</section>
	)
}

export default MyTraining
