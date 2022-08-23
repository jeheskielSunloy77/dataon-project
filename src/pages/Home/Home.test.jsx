import { AppProvider } from '@/utils/AppContext'
import { matchMediaConfig } from '@/utils/testUtils'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { it } from 'vitest'
import Home from '.'

matchMediaConfig()

describe('Home Page', () => {
	it('should render all 4 sections without crashing', () => {
		const { container } = render(
			<BrowserRouter>
				<AppProvider>
					<Home />
				</AppProvider>
			</BrowserRouter>
		)
		expect(container.querySelectorAll('.sectionContainer').length).toBe(4)
	})
})
