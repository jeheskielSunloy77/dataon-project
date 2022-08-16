import { matchMediaConfig } from '@/utils/testUtils'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import LoginCardBody from './LoginCardBody'

matchMediaConfig()

describe('Login Page test', () => {
	test('should redirect to home page', () => {
		render(<LoginCardBody />)

		const form = screen.getByTestId('loginForm')
		const username = screen.getByTestId('usernameInput')
		const password = screen.getByTestId('passwordInput')
		fireEvent.change(username, {
			target: { value: 'admin' },
		})
		fireEvent.change(password, {
			target: { value: 'admin' },
		})
		fireEvent.submit(form)
		expect(window.location.pathname).toBe('/')
	})
})
