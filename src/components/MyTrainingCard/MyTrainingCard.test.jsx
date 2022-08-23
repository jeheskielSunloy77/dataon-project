/* eslint-disable react/jsx-props-no-spreading */
import { render } from '@testing-library/react'
import { it } from 'vitest'
import MyTrainingCard from '.'
import { data1 } from '../../mockData'

describe('MyTrainingCard component', () => {
	it('should render with props without crashing', () => {
		const { container } = render(<MyTrainingCard {...data1[0]} />)
		expect(container).toBeDefined()
	})
})
