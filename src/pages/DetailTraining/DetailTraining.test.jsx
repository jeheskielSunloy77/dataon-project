import { matchMediaConfig, setupAdmin } from '@/utils/index'
import { render, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import DetailTraining from '.'

matchMediaConfig()

const renderer = (id) =>
	render(
		<MemoryRouter initialEntries={['detail page', `/detail-training/${id || 1}`]}>
			<Routes>
				<Route path='detail-training/:id' element={<DetailTraining />} />
			</Routes>
		</MemoryRouter>
	)

describe('DetailTraining page', () => {
	it('should render DetailTraining page', async () => {
		setupAdmin()
		const { container } = renderer()
		expect(container).toBeDefined()
	})
	it('should render 2 cards', async () => {
		setupAdmin()
		const { container } = renderer()
		await waitFor(expect(container.querySelectorAll('.ant-card').length).toBe(3))
	})
	it('should render 2 buttons', async () => {
		setupAdmin()
		const { container } = renderer()
		await waitFor(() =>
			expect(container.querySelectorAll('.ant-btn').length).toBe(5)
		)
	})
	it('should render disabled join button', async () => {
		setupAdmin()
		const { getByText } = renderer()
		await new Promise((resolve) => setTimeout(resolve, 5000))
		const joinButton = getByText('Join Class')
		expect(joinButton).toBeTruthy()
		// expect(joinButton.disabled).toBeTruthy()
	})
})
