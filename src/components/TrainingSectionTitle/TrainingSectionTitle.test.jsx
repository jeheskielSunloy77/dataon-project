import { render } from '@testing-library/react'
import { it } from 'vitest'
import TrainingSectionTitle from '.'

describe('TrainingSectionTitle component', () => {
	it('should render without crashing', () => {
		render(<TrainingSectionTitle />)
	})
	it('should display correct props', () => {
		const { getByText } = render(
			<TrainingSectionTitle text='test' dataLength={10} />
		)
		expect(getByText('test')).toBeDefined()
		expect(getByText('10')).toBeDefined()
	})
})
