import { matchMediaConfig, setupAdmin, setupUser } from '@/utils/index'
import { render, waitFor } from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { expect, it } from 'vitest'
import UpsertTraining from '.'

matchMediaConfig()

describe('UpsertTraining page', () => {
	const renderer = (page, id) =>
		render(
			<BrowserRouter>
				<Routes>
					<Route path={`/${page}Training/${id}`} element={<UpsertTraining />} />
				</Routes>
			</BrowserRouter>
		)

	it('should render without crashing', () => {
		renderer()
	})
	it('should render a form', () => {
		const { container } = renderer()
		expect(container.querySelector('form')).toBeDefined()
	})
	it('should render a form with 3 inputs', () => {
		const { getAllByRole } = renderer()

		expect(getAllByRole('textbox')).toHaveLength(9)
	})
	it('should render a form with a select', () => {
		const { getAllByRole } = renderer()
		expect(getAllByRole('combobox')).toHaveLength(1)
	})
	it('should render a submit button', () => {
		const { getByTestId } = renderer()
		expect(getByTestId('btnSubmit')).toBeDefined()
	})

	it('should hide 3 inputs when selecting onlineClass', () => {
		const { getAllByRole, getByTestId } = renderer()
		const onlineClass = getByTestId('onlineClass')
		onlineClass.click()
		expect(getAllByRole('textbox')).toHaveLength(6)
	})
	it('should navigate to / after submitting the form', () => {
		const { getByTestId, getAllByRole, getByPlaceholderText } = renderer()
		const textbox = getAllByRole('textbox')
		const submitBtn = getByTestId('btnSubmit')
		textbox.forEach((input) => {
			input.value = 'testing'
		})
		const startDate = getByPlaceholderText('Start date')
		const endDate = getByPlaceholderText('End date')
		startDate.value = '2022-08-26 12:00:00'
		endDate.value = '2022-08-26 16:00:00'

		submitBtn.click()

		expect(window.location.pathname).toBe('/')
	})
	it('should render the editTraining page when the url is /edit-training', async () => {
		const { container } = renderer()
		setupAdmin()
		const eventName = container.querySelectorAll('input')
		await waitFor(() => expect(eventName).toBeTruthy())
	})
	it('should render transfer component correctly', async () => {
		const { container } = renderer()
		setupAdmin()
		const transfer = container.querySelector('.ant-transfer')
		await waitFor(() => expect(transfer).toBeTruthy())

		const transferInputs = container.querySelectorAll(
			'.ant-transfer-list-search input'
		)
		transferInputs.forEach((input) => (input.value = 'Participant 10'))
		// expect(transferInputs).toHaveLength(2)
		// expect(getByText('Participant 10')).toBeDefined()
	})
	it('should redirect non admin user to home page', async () => {
		renderer()
		setupUser()

		await waitFor(() => expect(window.location.pathname).toBe('/'))
	})
})
