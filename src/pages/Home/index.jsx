import BreadcrumbSection from './BreadcrumbSection'
import SearchSection from './SearchSection'
import TableSection from './TableSection'

const Home = () => (
	<div className='pageContainer space-y-2'>
		<BreadcrumbSection />
		<SearchSection />
		<TableSection />
	</div>
)

export default Home
