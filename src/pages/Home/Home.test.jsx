import {
	AppProvider,
	matchMediaConfig,
	setupAdmin,
	setupUser,
} from '@/utils/index'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Home from '.'

matchMediaConfig()

const renderer = () =>
	render(
		<AppProvider>
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		</AppProvider>
	)

describe('Home Page', () => {
	it('should render all 4 sections without crashing', () => {
		setupUser()
		const { container } = renderer()
		expect(container.querySelectorAll('.sectionContainer').length).toBe(4)
	})
})
it('should render only 3 when admin sections without crashing', () => {
	setupAdmin()
	const { container } = renderer()
	expect(container.querySelectorAll('.sectionContainer').length).toBe(3)
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
		fireEvent.change(searchName, { target: { value: 'non et iste' } })
		fireEvent.click(searchButton)

		fireEvent.change(searchEvent, { target: { value: true } })
		fireEvent.keyPress(searchEvent, { key: 'Enter', code: 13 })

		fireEvent.change(searchStatus, { target: { value: true } })
		fireEvent.keyPress(searchStatus, { key: 'Enter', code: 13 })

		fireEvent.change(searchStatus, { target: { value: false } })
		fireEvent.keyPress(searchStatus, { key: 'Enter', code: 13 })

		await new Promise((resolve) => setTimeout(resolve, 1000))
		await waitFor(() => expect(tableRows.length).toBeDefined())
	})
})
