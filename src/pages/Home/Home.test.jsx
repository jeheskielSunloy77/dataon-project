import { AppProvider } from '@/utils/AppContext'
import { matchMediaConfig } from '@/utils/testUtils'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Home from '.'

matchMediaConfig()

const setupAdmin = () => {
	const adminToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjkyZjcwMWMtMjc5My00ZmE2LTk3M2ItY2NiMDEwYzE4NjgwIiwidXNlcm5hbWUiOiJicm93bnBhbmRhODE1IiwicGFzc3dvcmQiOiJob2NrZXkiLCJzYWx0Ijoia0JNbjhRQU0iLCJtZDUiOiI2ZjU5MDUwODVlMTUzMmQyYzljOTg5YThiMjdlMmM4ZiIsInNoYTEiOiIxNTUzZGJhMDk3MzMxMGQ1ODdiYmU2NGZjMmVlZDY2MmI3NTkxMWVkIiwic2hhMjU2IjoiNjBlZjZhYmI1OGM0ZDQyZDE5OTVkZjQ1ZTQxYWJmODhlODMzZTQ0MjExZmUyZDJhNDY0ZWM1MWI0MzFhYjI4ZSIsInVzZXJJZCI6InVzZXIxMjMifQ.gLqTTss_Iqjbdu0PtKDGk0UhbE8JuQdg-LyyoYknO90'

	localStorage.setItem('token', adminToken)
}
const renderer = () =>
	render(
		<BrowserRouter>
			<AppProvider>
				<Home />
			</AppProvider>
		</BrowserRouter>
	)
describe('Home Page', () => {
	it('should render all 4 sections without crashing', () => {
		setupAdmin()
		const { container } = renderer()
		expect(container.querySelectorAll('.sectionContainer').length).toBe(4)
	})
})
describe('Search Filters', () => {
	it('should filter the data when searching by event name', async () => {
		setupAdmin()
		const { container, getByTestId } = renderer()

		const searchButton = container.querySelector(
			'.ant-btn.ant-btn-default.ant-btn-icon-only.ant-input-search-button'
		)

		const searchName = getByTestId('searchbarInput')
		const searchEvent = getByTestId('eventTypeSelect').querySelector('input')
		const searchStatus = getByTestId('eventStatusSelect').querySelector('input')
		await new Promise((resolve) => setTimeout(resolve, 2500))
		const tableRows = container.querySelectorAll('.myTraining tbody tr')
		fireEvent.change(searchName, { target: { value: 'Tailwind' } })
		fireEvent.click(searchButton)

		fireEvent.change(searchEvent, { target: { value: true } })
		fireEvent.keyPress(searchEvent, { key: 'Enter', code: 13 })

		fireEvent.change(searchStatus, { target: { value: true } })
		fireEvent.keyPress(searchStatus, { key: 'Enter', code: 13 })

		fireEvent.change(searchStatus, { target: { value: false } })
		fireEvent.keyPress(searchStatus, { key: 'Enter', code: 13 })

		await new Promise((resolve) => setTimeout(resolve, 1000))
		await waitFor(() => expect(tableRows.length).toBe(5))
	})
})
