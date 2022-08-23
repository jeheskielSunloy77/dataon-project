import { render } from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { describe, test } from 'vitest'
import Login from '.'

describe('Login Page test', () => {
	test('should render the page', () => {
		render(
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		)
	})
})
