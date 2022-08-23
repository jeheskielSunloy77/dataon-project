import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, test } from 'vitest'
import BreadcrumbSection from '.'

describe('Bradcrumb component test', () => {
	test('should render correctly', () => {
		render(
			<BrowserRouter>
				<BreadcrumbSection />
			</BrowserRouter>
		)
		const moreBtn = screen.getByTestId('moreBtn')
		const newTrainingBtn = screen.getByTestId('newTrainingBtn')
		expect(moreBtn).toBeDefined()
		expect(newTrainingBtn).toBeDefined()
	})
})
describe('Create new training button test', () => {
	test('should render button as a link', () => {
		render(
			<BrowserRouter>
				<BreadcrumbSection />
			</BrowserRouter>
		)
		const newTrainingBtn = screen.getByTestId('newTrainingBtn')
		expect(newTrainingBtn).toHaveProperty(
			'href',
			expect.stringContaining('/newTraining')
		)
	})
})
