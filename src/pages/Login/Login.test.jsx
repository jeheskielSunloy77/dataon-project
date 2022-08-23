import { matchMediaConfig } from '@/utils/testUtils'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, test } from 'vitest'
import Login from '.'

matchMediaConfig()

describe('Login Page test', () => {
	const renderer = () =>
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		)

	test('should render the page', () => {
		const { container } = renderer()
		expect(container).toBeDefined()
	})
	it('should write token to the localstorage after login', () => {
		const { getByTestId, container } = renderer()

		const usernameInput = getByTestId('usernameInput')
		const passwordInput = getByTestId('passwordInput')
		usernameInput.value = 'test'
		passwordInput.value = 'test'
		const form = container.querySelector('form')
		form.dispatchEvent(new Event('submit', { bubbles: true }))
		expect(localStorage.getItem('token')).toBeDefined()
	})
	it('should warn user when username or password is incorrect', async () => {
		const { getByTestId, container } = renderer()

		const usernameInput = getByTestId('usernameInput')
		const passwordInput = getByTestId('passwordInput')
		usernameInput.value = 'wrongUsername'
		passwordInput.value = 'wrongPassword'
		const form = container.querySelector('form')
		form.dispatchEvent(new Event('submit', { bubbles: true }))
		setTimeout(() => {
			expect(screen.getByText(/Username or password is incorrect/i)).toBeDefined()
		}, 1000)
	})
})
