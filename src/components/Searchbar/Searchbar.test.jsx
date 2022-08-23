import { fireEvent, render } from '@testing-library/react'
import { it } from 'vitest'
import Searchbar from '.'

describe('searchbar component', () => {
	const setup = () => {
		const onSearch = () => alert('searching')
		const utils = render(<Searchbar onSearch={onSearch} />)
		const input = utils.getByTestId('searchbarInput')

		return {
			input,
			...utils,
		}
	}

	it('should render without crashing', () => {
		render(<Searchbar />)
	})
	it('should render with lable and placeholder', () => {
		const { getByText } = render(
			<Searchbar label='Search' placeholder='Search for a movie' />
		)
		expect(getByText('Search')).toBeDefined()
	})
	it('should be able to search with the onseach prop', () => {
		const { input } = setup()
		fireEvent.change(input, { target: { value: 'hellowolrd' } })
		expect(input.value).toBe('hellowolrd')
		// fireEvent.click(screen.getByRole('button'))
		// fireEvent.click(screen.getByRole('button'))
		// expect(alert).toHaveBeenCalledWith('searching')
	})
})
