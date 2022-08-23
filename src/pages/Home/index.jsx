import { HeaderSection } from '@/components/index'
import { AllTrainings, MyTraining, SearchFilters } from './sections'

const Home = () => (
	<div className='pageContainer space-y-2'>
		<HeaderSection />
		<SearchFilters />
		<MyTraining />
		<AllTrainings />
	</div>
)

export default Home
