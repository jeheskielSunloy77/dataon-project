import { matchMediaConfig } from '@/utils/testUtils'
import { render, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import DetailTraining from '.'

matchMediaConfig()

describe('DetailTraining page', () => {
	const renderer = (id) =>
		render(
			<MemoryRouter initialEntries={['detail page', `/detailTraining/${id}`]}>
				<Routes>
					<Route path='detailTraining/:id' element={<DetailTraining />} />
				</Routes>
			</MemoryRouter>
		)

	const setupAdmin = () => {
		const adminToken =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjkyZjcwMWMtMjc5My00ZmE2LTk3M2ItY2NiMDEwYzE4NjgwIiwidXNlcm5hbWUiOiJicm93bnBhbmRhODE1IiwicGFzc3dvcmQiOiJob2NrZXkiLCJzYWx0Ijoia0JNbjhRQU0iLCJtZDUiOiI2ZjU5MDUwODVlMTUzMmQyYzljOTg5YThiMjdlMmM4ZiIsInNoYTEiOiIxNTUzZGJhMDk3MzMxMGQ1ODdiYmU2NGZjMmVlZDY2MmI3NTkxMWVkIiwic2hhMjU2IjoiNjBlZjZhYmI1OGM0ZDQyZDE5OTVkZjQ1ZTQxYWJmODhlODMzZTQ0MjExZmUyZDJhNDY0ZWM1MWI0MzFhYjI4ZSIsInVzZXJJZCI6InVzZXIxMjMifQ.gLqTTss_Iqjbdu0PtKDGk0UhbE8JuQdg-LyyoYknO90'

		localStorage.setItem('token', adminToken)
	}

	it('should render DetailTraining page', async () => {
		setupAdmin()
		const { container } = renderer()
		expect(container).toBeDefined()
	})
	it('should render 2 cards', async () => {
		setupAdmin()
		const { container } = renderer(1)
		await waitFor(() =>
			expect(container.querySelectorAll('.ant-card').length).toBe(2)
		)
	})
	it('should render 2 buttons', async () => {
		setupAdmin()
		const { container } = renderer(1)
		await waitFor(() =>
			expect(container.querySelectorAll('.ant-btn').length).toBe(5)
		)
	})
	it('should render disabled join button', async () => {
		setupAdmin()
		const { getByText } = renderer(8)
		await waitFor(() => expect(getByText('Online Class')).toBeTruthy())
	})
})
