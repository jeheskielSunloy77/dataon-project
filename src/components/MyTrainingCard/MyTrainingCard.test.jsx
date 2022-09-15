/* eslint-disable react/jsx-props-no-spreading */
import { mockData1 } from '@/utils/index'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { it } from 'vitest'
import MyTrainingCard from '.'

describe('MyTrainingCard component', () => {
	it('should render with props without crashing', () => {
		const { container } = render(
			<BrowserRouter>
				<MyTrainingCard {...mockData1[0]} />
			</BrowserRouter>
		)
		expect(container).toBeDefined()
	})
})
