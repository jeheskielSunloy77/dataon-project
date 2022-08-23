import {
	MyTrainingCarousel,
	TrainingSectionTitle,
	TrainingTable,
} from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import { useContext } from 'react'

const MyTraining = () => {
	const { dataView, myTrainingData } = useContext(AppContext)

	return (
		<section className='sectionContainer'>
			<TrainingSectionTitle
				text='My Trainings Sessions'
				dataLength={myTrainingData.length}
			/>
			{dataView === 'table' && <TrainingTable data={myTrainingData} />}
			{dataView === 'cards' && <MyTrainingCarousel data={myTrainingData} />}
		</section>
	)
}

export default MyTraining
