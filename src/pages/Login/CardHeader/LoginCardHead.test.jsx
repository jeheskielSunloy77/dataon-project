import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test } from 'vitest'
import LoginCardHead from '.'

describe('Login Card header test', () => {
	test('should show header text all the time', () => {
		render(<LoginCardHead />)
		expect(
			screen.findByText(/Human Resource Information System SunFish7/i)
		).toBeDefined()
	})
	test('main logo image should be render', () => {
		render(<LoginCardHead />)
		expect(screen.getByTestId('mainLogo')).toBeDefined()
	})
	test('language select should display all language when clicked', () => {
		render(<LoginCardHead />)
		userEvent.click(screen.getByTestId('langSelect'))
		expect(screen.findByText(/English(EN) Bahasa(ID)/i)).toBeDefined()
	})
})
