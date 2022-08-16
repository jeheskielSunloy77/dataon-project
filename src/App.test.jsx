import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { matchMediaConfig } from './utils/testUtils'
matchMediaConfig()
test('renders without crashing', () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
})
