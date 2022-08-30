import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import DetailTraining from '.'
// matchMediaConfig()
describe('DetailTraining page', () => {
	// const renderer = render(
	// 	<BrowserRouter>
	// 		<DetailTraining />
	// 	</BrowserRouter>
	// )

	// const setupAdmin = () => {
	// 	const adminToken =
	// 		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjkyZjcwMWMtMjc5My00ZmE2LTk3M2ItY2NiMDEwYzE4NjgwIiwidXNlcm5hbWUiOiJicm93bnBhbmRhODE1IiwicGFzc3dvcmQiOiJob2NrZXkiLCJzYWx0Ijoia0JNbjhRQU0iLCJtZDUiOiI2ZjU5MDUwODVlMTUzMmQyYzljOTg5YThiMjdlMmM4ZiIsInNoYTEiOiIxNTUzZGJhMDk3MzMxMGQ1ODdiYmU2NGZjMmVlZDY2MmI3NTkxMWVkIiwic2hhMjU2IjoiNjBlZjZhYmI1OGM0ZDQyZDE5OTVkZjQ1ZTQxYWJmODhlODMzZTQ0MjExZmUyZDJhNDY0ZWM1MWI0MzFhYjI4ZSIsInVzZXJJZCI6InVzZXIxMjMifQ.gLqTTss_Iqjbdu0PtKDGk0UhbE8JuQdg-LyyoYknO90'

	// 	window.history.pushState({}, 'Detail Training', '/detailTraining/1')
	// 	localStorage.setItem('token', adminToken)
	// }

	it('should render DetailTraining page', () => {
		const { container } = render(
			<BrowserRouter>
				<DetailTraining />
			</BrowserRouter>
		)
		// setupAdmin()
		expect(container).toBeDefined()
	})
})
