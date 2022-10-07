import { fireEvent, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { it } from 'vitest'
import Page404 from '.'

describe('Page404', () => {
	it('should render Page404', () => {
		const { container } = render(
			<BrowserRouter>
				<Page404 />
			</BrowserRouter>
		)

		expect(container).toBeDefined()
	})
	it('should change page when clicked the button', () => {
		const { container } = render(
			<BrowserRouter>
				<Page404 />
			</BrowserRouter>
		)
		const button = container.querySelector('a')

		expect(button).toBeDefined()
		fireEvent.click(button)
	})
})
