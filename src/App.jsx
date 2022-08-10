import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import {
	CreateArticle,
	Dashboard,
	DetailArticle,
	EditArticle,
	Login,
} from './pages'

const App = () => (
	<Layout>
		<Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='/login' element={<Login />} />
			<Route path='/detailArticle' element={<DetailArticle />} />
			<Route path='/createArticle' element={<CreateArticle />} />
			<Route path='/editArticle' element={<EditArticle />} />
		</Routes>
	</Layout>
)

export default App
