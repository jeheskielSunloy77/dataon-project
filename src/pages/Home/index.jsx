import {
	AllTrainings,
	BreadcrumbSection,
	MyTraining,
	SearchFilters,
} from './sections'

const Home = () => (
	<div className='pageContainer space-y-2'>
		<BreadcrumbSection />
		<SearchFilters />
		<MyTraining />
		<AllTrainings />
	</div>
)

export default Home
