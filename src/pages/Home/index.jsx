import { HeaderSection } from '@/components/index'
import { getUser } from '@/utils/index'
import { AllTrainings, MyTraining, SearchFilters } from './sections'

const Home = () => {
	const { role } = getUser()

	return (
		<main className='pageContainer space-y-2'>
			<HeaderSection />
			<SearchFilters />
			{role === 'user' && <MyTraining />}
			<AllTrainings />
		</main>
	)
}

export default Home
