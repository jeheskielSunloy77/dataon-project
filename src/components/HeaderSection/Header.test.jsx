import { setupAdmin } from '@/utils/index'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import BreadcrumbSection from '.'

describe('Bradcrumb component test', () => {
	it('should render correctly', () => {
		setupAdmin()
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
	it('should render button as a link', () => {
		setupAdmin()

		render(
			<BrowserRouter>
				<BreadcrumbSection />
			</BrowserRouter>
		)
		const newTrainingBtn = screen.getByTestId('newTrainingBtn')
		expect(newTrainingBtn).toHaveProperty(
			'href',
			expect.stringContaining('/new-training')
		)
	})
})
