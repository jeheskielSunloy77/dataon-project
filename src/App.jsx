import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { CreateArticle, DetailArticle, EditArticle, Home, Login } from './pages'

const App = () => (
	<Layout>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/detailArticle' element={<DetailArticle />} />
			<Route path='/createArticle' element={<CreateArticle />} />
			<Route path='/editArticle' element={<EditArticle />} />
		</Routes>
	</Layout>
)

export default App
