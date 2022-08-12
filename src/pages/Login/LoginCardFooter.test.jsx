import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import LoginCardFooter from './LoginCardFooter'

const text =
	/This product is licensed for Dataon Corporation © 1999 - 2022 Dataon Technologies, All Rights Reserved/i

describe('Login Card Footer test', () => {
	test('should show footer text all the time', () => {
		render(<LoginCardFooter />)
		expect(screen.getByText(text)).toBeDefined()
	})
})
