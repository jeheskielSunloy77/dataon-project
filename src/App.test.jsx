import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppProvider } from './utils/AppContext'
import { matchMediaConfig, setupAdmin } from './utils/testUtils'

matchMediaConfig()

test('renders without crashing', () => {
	setupAdmin()

	render(
		<BrowserRouter>
			<AppProvider>
				<App />
			</AppProvider>
		</BrowserRouter>
	)
})
