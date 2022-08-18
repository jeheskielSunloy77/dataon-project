import { TrainingSectionTitle, TrainingTable } from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import { useContext } from 'react'

const AllTrainings = () => {
	const { allTrainingData } = useContext(AppContext)

	return (
		<section className='sectionContainer'>
			<TrainingSectionTitle
				text='All Trainings Sessions'
				dataLength={allTrainingData.dataLength}
			/>
			<TrainingTable data={allTrainingData} />
		</section>
	)
}

export default AllTrainings
