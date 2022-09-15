import { mockData1 } from '@/utils/index'
import { fireEvent, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import AllTrainingsCards from '.'

const renderer = () => {
	const setPageLimit = vi.fn()

	return render(
		<BrowserRouter>
			<AllTrainingsCards
				setPageLimit={setPageLimit}
				dataLength={10}
				cardsData={mockData1}
			/>
		</BrowserRouter>
	)
}

describe('AllTrainingsCards', () => {
	it('should render AllTrainingsCards', async () => {
		const { container } = renderer()
		await new Promise((resolve) => setTimeout(resolve, 2000))
		expect(container).toBeDefined()
	})
	it('should change page when clicked the card', async () => {
		const { container } = renderer()

		await new Promise((resolve) => setTimeout(resolve, 2000))

		const card = container.querySelector('.ant-card')
		expect(card).toBeDefined()
		fireEvent.click(card)
	})
})
