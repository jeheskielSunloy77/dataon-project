import { HeaderSection } from '@/components/index'
import { AllTrainings, MyTraining, SearchFilters } from './sections'

const Home = () => (
	<main className='pageContainer space-y-2'>
		<HeaderSection />
		<SearchFilters />
		<MyTraining />
		<AllTrainings />
	</main>
)

export default Home
