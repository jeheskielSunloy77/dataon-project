import { matchMediaConfig } from '@/utils/test-utils'
import { fireEvent, render, screen } from '@testing-library/react'
import { Form } from 'antd'
import { describe, expect, test } from 'vitest'
import LoginFormInputs from './LoginFormInputs'

matchMediaConfig()

describe('Login form inputs test', () => {
	test('should render username and password inputs', () => {
		render(<LoginFormInputs />)
		expect(screen.getByTestId('usernameInput')).toBeDefined()
		expect(screen.getByTestId('passwordInput')).toBeDefined()
	})
	test('should display inputed username value', () => {
		render(
			<Form>
				<LoginFormInputs />
			</Form>
		)
		const username = screen.getByTestId('usernameInput')
		fireEvent.change(username, { target: { value: 'testingUsername' } })
		expect(username.value).toBe('testingUsername')
	})
	test('should display inputed password value', () => {
		render(
			<Form>
				<LoginFormInputs />
			</Form>
		)
		const password = screen.getByTestId('passwordInput')
		fireEvent.change(password, { target: { value: 'testingPassword' } })
		expect(password.value).toBe('testingPassword')
	})
	test('should display inputed password value', () => {
		render(
			<Form>
				<LoginFormInputs />
			</Form>
		)
		const rememberMe = screen.getByTestId('rememberMeCheckbox')
		fireEvent.change(rememberMe, { target: { checked: true } })
		expect(rememberMe.checked).toBe(true)
	})
})
