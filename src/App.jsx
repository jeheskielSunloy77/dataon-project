import { Route, Routes, useLocation } from 'react-router-dom'
import { DetailTraining, Home, Login, NewTraining, Page404 } from './pages'

const App = () => {
	const { pathname } = useLocation()
	const token = localStorage.getItem('token') || sessionStorage.getItem('token')
	if (pathname !== '/login' && !token) window.location.replace('/login')

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/detail-training/:id' element={<DetailTraining />} />
			<Route path='/edit-training/:id' element={<NewTraining />} />
			<Route path='/new-training' element={<NewTraining />} />
			<Route path='*' element={<Page404 />} />
		</Routes>
	)
}

export default App
