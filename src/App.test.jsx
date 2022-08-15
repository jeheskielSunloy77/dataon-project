import { render } from '@testing-library/react'
// import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
test('renders without crashing', () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
})
