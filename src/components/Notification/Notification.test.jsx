import { render, screen } from '@testing-library/react'
import { Notification } from '../index'
describe('Notification test', () => {
	it('should show notification', () => {
		render(<div></div>)
		const message = 'test message'
		const desc = 'test desc'
		Notification(message, desc, 'success')
		setTimeout(() => {
			expect(screen.getByText(message)).toBeDefined()
			expect(screen.getByText(desc)).toBeDefined()
		}, 1000)
	})
})
