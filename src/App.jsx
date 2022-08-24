import { Route, Routes, useLocation } from 'react-router-dom'
import { DetailArticle, EditArticle, Home, Login, NewTraining } from './pages'

const App = () => {
	const { pathname } = useLocation()
	const token = localStorage.getItem('token')
	if (pathname !== '/login' && !token) window.location.replace('/login')

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/detailArticle' element={<DetailArticle />} />
			<Route path='/editArticle' element={<EditArticle />} />
			<Route path='/newTraining' element={<NewTraining />} />
		</Routes>
	)
}

export default App
