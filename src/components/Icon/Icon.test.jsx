import { render } from '@testing-library/react'
import Icon from '.'

describe('Icon component', () => {
	it('should render without crashing', () => {
		const { container } = render(<Icon name='star' />)
		expect(container).toBeDefined()
	})
})
