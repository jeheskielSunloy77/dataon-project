import { TrainingSectionTitle, TrainingTable } from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import { useContext } from 'react'

const AllTrainings = () => {
	const { allTrainingData, dataView } = useContext(AppContext)

	return (
		<section className='sectionContainer'>
			<TrainingSectionTitle
				text='All Trainings Sessions'
				dataLength={allTrainingData.length}
			/>
			{dataView === 'table' && (
				<TrainingTable data={allTrainingData} infiniteScroll />
			)}
		</section>
	)
}

export default AllTrainings
