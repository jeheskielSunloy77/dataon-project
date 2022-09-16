import { Route, Routes, useLocation } from 'react-router-dom'
import { DetailTraining, Home, Login, Page404, UpsertTraining } from './pages'

const App = () => {
	const { pathname } = useLocation()
	const token = localStorage.getItem('token') || sessionStorage.getItem('token')
	const isLoginPage = pathname === '/login'
	if (!isLoginPage && !token) window.location.replace('/login')
	else
		return (
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/detail-training/:id' element={<DetailTraining />} />
				<Route path='/edit-training/:id' element={<UpsertTraining />} />
				<Route path='/new-training' element={<UpsertTraining />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		)
}

export default App
