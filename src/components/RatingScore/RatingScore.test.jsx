import { render, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import RatingScore from '.'
describe('RatingScore component', () => {
	const renderer = () =>
		render(<RatingScore rating={100} id={1} />, {
			container: document.body,
		})
	it('should render without crashing', () => {
		const { container } = renderer()
		expect(container).toBeDefined()
	})
	it('should display correct props', async () => {
		const { container } = renderer()

		await waitFor(() =>
			expect(
				container.querySelectorAll('.ant-rate-star.ant-rate-star-full')
			).toHaveLength(5)
		)
	})
	// it('should display a modal when clicked', async () => {
	// 	const { container } = renderer()
	// 	const rating = container.querySelector('#ratingContainer')
	// 	act(() => {
	// 		fireEvent.click(rating)
	// 	})

	// 	await new Promise((resolve) => setTimeout(resolve, 1000))
	// 	expect(container.querySelector('.ant-modal')).toBeTruthy()
	// })
	// it('should close the modal when clicked the cancle button', async () => {
	// 	const { container } = renderer()
	// 	const rating = container.querySelector('#ratingContainer')
	// 	act(() => {
	// 		fireEvent.click(rating)
	// 	})

	// 	await new Promise((resolve) => setTimeout(resolve, 1000))
	// 	const cancelButton = container.querySelector(
	// 		'.ant-modal-footer .ant-btn.ant-btn-default'
	// 	)
	// 	act(() => {
	// 		fireEvent.click(cancelButton)
	// 	})

	// 	await new Promise((resolve) => setTimeout(resolve, 1000))
	// 	expect(container.querySelector('.ant-modal')).toBeNull()
	// })
	// it('should close the modal when clicked the ok button', async () => {
	// 	const { container } = renderer()
	// 	const rating = container.querySelector('#ratingContainer')
	// 	act(() => {
	// 		fireEvent.click(rating)
	// 	})

	// 	await new Promise((resolve) => setTimeout(resolve, 1000))
	// 	const okButton = container.querySelector(
	// 		'.ant-modal-footer .ant-btn.ant-btn-primary'
	// 	)
	// 	act(() => {
	// 		fireEvent.click(okButton)
	// 	})

	// 	await new Promise((resolve) => setTimeout(resolve, 1000))
	// 	expect(container.querySelector('.ant-modal')).toBeNull()
	// })
})
