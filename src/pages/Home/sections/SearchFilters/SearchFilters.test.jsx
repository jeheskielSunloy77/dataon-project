import { AppProvider } from '@/utils/AppContext'
import { fireEvent, render } from '@testing-library/react'
import SearchFilters from '.'

describe('SearchFilters section', () => {
	it('should render without crashing', () => {
		render(
			<AppProvider>
				<SearchFilters />
			</AppProvider>
		)
	})
	it('should render with 3 searchbars, 1 switcher and 1 button', () => {
		const { getByText, getByRole } = render(
			<AppProvider>
				<SearchFilters />
			</AppProvider>
		)
		expect(getByText('Search Training')).toBeDefined()
		expect(getByText('Event Type')).toBeDefined()
		expect(getByText('Status')).toBeDefined()
		expect(getByRole('switch')).toBeDefined()
		expect(getByText('View As Cards')).toBeDefined()
	})
	it('the button should change to View As Table when clicked', () => {
		const { getByText } = render(
			<AppProvider>
				<SearchFilters />
			</AppProvider>
		)
		const button = getByText('View As Cards')
		fireEvent.click(button)
		expect(getByText('View As Table')).toBeDefined()
	})
})
