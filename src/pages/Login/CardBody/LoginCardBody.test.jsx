import { matchMediaConfig } from '@/utils/index'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import LoginCardBody from '.'

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
describe('Login form inputs test', () => {
	test('should render username and password inputs', () => {
		render(<LoginCardBody />)
		expect(screen.getByTestId('usernameInput')).toBeDefined()
		expect(screen.getByTestId('passwordInput')).toBeDefined()
	})
	test('should display inputed username value', () => {
		render(<LoginCardBody />)
		const username = screen.getByTestId('usernameInput')
		fireEvent.change(username, { target: { value: 'testingUsername' } })
		expect(username.value).toBe('testingUsername')
	})
	test('should display inputed password value', () => {
		render(<LoginCardBody />)
		const password = screen.getByTestId('passwordInput')
		fireEvent.change(password, { target: { value: 'testingPassword' } })
		expect(password.value).toBe('testingPassword')
	})
	test('should display inputed password value', () => {
		render(<LoginCardBody />)
		const rememberMe = screen.getByTestId('rememberMeCheckbox')
		fireEvent.change(rememberMe, { target: { checked: true } })
		expect(rememberMe.checked).toBe(true)
	})
})
