import { data1 } from '@/mockData'
import { AppProvider } from '@/utils/AppContext'
import { render } from '@testing-library/react'
import { it } from 'vitest'
import MyTrainingCarousel from '.'

describe('MyTrainingCarousel component', () => {
	const renderer = () =>
		render(
			<AppProvider>
				<MyTrainingCarousel carouselData={data1} />
			</AppProvider>
		)

	it('should render with props without crashing', () => {
		const { container } = renderer()
		expect(container).toBeDefined()
	})
	it('should render a carousel', () => {
		const { container } = renderer()
		expect(container.querySelector('.carousel')).toBeDefined()
	})
	it('should render a carousel with correct number of items', () => {
		const { container } = renderer()
		expect(container.querySelectorAll('.slick-slide.slick-active').length).toBe(3)
	})
	// it('should display more slide when swipe is active', () => {
	// 	const { container } = renderer()
	// 	const nextButton = screen.getByTestId('nextArrow')

	// 	expect(
	// 		container
	// 			.querySelectorAll('.slick-slide.slick-active')[2]
	// 			.querySelector('h1').textContent
	// 	).toBe('Training Golang')

	// 	fireEvent.click(nextButton)
	// 	expect(
	// 		container
	// 			.querySelectorAll('.slick-slide.slick-active')[2]
	// 			.querySelector('h1').textContent
	// 	).toBe('Learn Typescript')
	// })
})
