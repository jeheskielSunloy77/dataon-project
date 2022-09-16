import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, test } from 'vitest'
import Breadcrumbs from '.'

describe('Bradcrumb component test', () => {
	test('should render correctly', () => {
		render(
			<BrowserRouter>
				<Breadcrumbs />
			</BrowserRouter>
		)
	})
	test('should navigate correctly when clicked', () => {
		render(
			<BrowserRouter>
				<Breadcrumbs />
			</BrowserRouter>
		)
		window.history.pushState({}, 'Test page', '/edit-training/1')
		const homeLink = screen.getByTestId('homeLink')
		fireEvent.click(homeLink)
		expect(window.location.pathname).toBe('/')
	})
})
