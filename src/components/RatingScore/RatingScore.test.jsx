import { render } from '@testing-library/react'
import RatingScore from '.'
describe('RatingScore component', () => {
	it('should render without crashing', () => {
		render(<RatingScore />)
	})
	it('should display correct props', async () => {
		const { getAllByTestId } = render(<RatingScore score={3} />)
		await new Promise((r) => setTimeout(r, 1000))

		await expect(getAllByTestId('starActive')).toHaveLength(3)
	})
})
