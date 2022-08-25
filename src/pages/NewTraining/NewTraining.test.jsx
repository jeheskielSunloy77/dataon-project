import { matchMediaConfig } from '@/utils/testUtils'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { expect, it } from 'vitest'
import NewTraining from '.'

matchMediaConfig()

describe('NewTraining page', () => {
	const renderer = () =>
		render(
			<BrowserRouter>
				<NewTraining />
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
})
