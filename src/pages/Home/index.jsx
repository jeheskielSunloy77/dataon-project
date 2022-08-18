import {
	BreadcrumbSection,
	CardsSection,
	SearchSection,
	TableSection,
} from './sections'

const Home = () => (
	<div className='pageContainer space-y-2'>
		<BreadcrumbSection />
		<SearchSection />
		<TableSection />
		<CardsSection />
	</div>
)

export default Home
