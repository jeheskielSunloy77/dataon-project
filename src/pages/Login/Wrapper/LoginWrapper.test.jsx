import bgImage from '@/assets/background.svg'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import LoginWrapper from '.'

describe('Login Card header test', () => {
	test('should have the correct background image', () => {
		render(<LoginWrapper />)
		expect(screen.getByTestId('loginWrapper').style.backgroundImage).toBe(
			`url(${bgImage})`
		)
	})
	test('should render children', () => {
		render(<LoginWrapper>Hello</LoginWrapper>)
		expect(screen.getByText('Hello')).toBeDefined()
	})
})
