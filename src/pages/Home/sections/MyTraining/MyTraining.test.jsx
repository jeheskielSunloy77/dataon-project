import { AppProvider } from '@/utils/AppContext'
import { matchMediaConfig } from '@/utils/testUtils'
import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import MyTraining from '.'

matchMediaConfig()

describe('MyTraining section', () => {
	const renderer = () =>
		render(
			<AppProvider>
				<MyTraining />
			</AppProvider>
		)

	it('should render without crashing', () => {
		const { container } = renderer()
		expect(container).toBeDefined()
	})
	it('should render correct title and number of trainings', () => {
		renderer()
		expect(screen.getByText('My Trainings Sessions')).toBeDefined()
		expect(screen.getByText('4')).toBeDefined()
	})
	it('should render a table initialy', () => {
		const { container } = renderer()
		expect(container.querySelector('.ant-carousel')).toBeDefined()
	})
})
