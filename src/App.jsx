import axios from '@/utils/axios'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import {
	CreateArticle,
	DetailArticle,
	EditArticle,
	Home,
	Login,
	NewTraining,
} from './pages'

const App = () => {
	const { pathname } = useLocation()
	const token = localStorage.getItem('token')
	if (pathname !== '/login' && !token) window.location.replace('/login')

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get('todos/1')
			console.log(res)
		}
		fetchData()
	}, [])

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/detailArticle' element={<DetailArticle />} />
			<Route path='/createArticle' element={<CreateArticle />} />
			<Route path='/editArticle' element={<EditArticle />} />
			<Route path='/newTraining' element={<NewTraining />} />
		</Routes>
	)
}

export default App
