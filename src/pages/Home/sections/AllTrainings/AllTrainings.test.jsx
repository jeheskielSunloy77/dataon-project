import { AppProvider } from '@/utils/AppContext'
import { matchMediaConfig } from '@/utils/testUtils'
import { render } from '@testing-library/react'
import { expect, it } from 'vitest'
import AllTrainings from '.'

matchMediaConfig()

describe('AllTrainings section', () => {
	const renderer = () =>
		render(
			<AppProvider>
				<AllTrainings />
			</AppProvider>
		)

	it('should render without crashing', () => {
		const { container } = renderer()
		expect(container).toBeDefined()
	})
	it('should render a table initialy', () => {
		const { container } = renderer()
		expect(container.querySelector('table')).toBeDefined()
	})
})
