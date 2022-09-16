import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, test } from 'vitest'
import BreadcrumbItems from './BreadcrumbItems'

describe('Bradcrumb items test', () => {
	test('should render correctly', () => {
		render(
			<BrowserRouter>
				<BreadcrumbItems />
			</BrowserRouter>
		)
	})
	test('should read path location correctly', () => {
		render(
			<BrowserRouter>
				<BreadcrumbItems />
			</BrowserRouter>
		)

		window.history.pushState({}, 'Test page', '/edit-training/1')
		expect(screen.findByText(/Home > Edit Training/i)).toBeDefined()
	})
})
