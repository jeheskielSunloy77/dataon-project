import { AppProvider, matchMediaConfig, mockData1 } from '@/utils/index'
import { fireEvent, render } from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { it } from 'vitest'
import TrainingTable from '.'

matchMediaConfig()

const renderer = () =>
	render(
		<BrowserRouter>
			<AppProvider>
				<Routes>
					<Route path='/' element={<TrainingTable tableData={mockData1} />} />
				</Routes>
			</AppProvider>
		</BrowserRouter>
	)

describe('TrainingTable component', () => {
	it('should render', () => {
		const { container } = renderer()
		expect(container).toBeDefined()
	})
	it('should render a table', () => {
		const { container } = renderer()
		expect(container.querySelector('table')).toBeDefined()
	})
	it('should render a table with correct number of columns and rows', () => {
		const { container } = renderer()
		expect(container.querySelectorAll('thead tr th').length).toBe(6)
		expect(container.querySelectorAll('tbody tr').length).toBe(4)
	})
	it('should be sorted by event name correctly when clicked', () => {
		const { container } = renderer()

		const tableHead = container.querySelectorAll('thead tr th')[0]

		const firstRow = container.querySelector(
			'tbody tr:nth-child(1) td:nth-child(1)'
		)
		const secondRow = container.querySelector(
			'tbody tr:nth-child(2) td:nth-child(1)'
		)
		const thirdRow = container.querySelector(
			'tbody tr:nth-child(3) td:nth-child(1)'
		)
		const forthRow = container.querySelector(
			'tbody tr:nth-child(4) td:nth-child(1)'
		)
		fireEvent.click(tableHead)
		expect(firstRow.textContent).toBe('Learn Golang')
		expect(secondRow.textContent).toBe('Learn ReactJS')
		expect(thirdRow.textContent).toBe('Learn Networking')
		expect(forthRow.textContent).toBe('Training Tailwind')
	})
	it('should be sorted by event type correctly when clicked', () => {
		const { container } = renderer()

		const tableHead = container.querySelectorAll('thead tr th')[1]

		const firstRow = container.querySelector(
			'tbody tr:nth-child(1) td:nth-child(2)'
		)
		const secondRow = container.querySelector(
			'tbody tr:nth-child(2) td:nth-child(2)'
		)
		const thirdRow = container.querySelector(
			'tbody tr:nth-child(3) td:nth-child(2)'
		)
		const forthRow = container.querySelector(
			'tbody tr:nth-child(4) td:nth-child(2)'
		)
		fireEvent.click(tableHead)
		expect(firstRow.textContent).toBe('Offline Class')
		expect(secondRow.textContent).toBe('Offline Class')
		expect(thirdRow.textContent).toBe('Offline Class')
		expect(forthRow.textContent).toBe('Online Class')
	})
	it('should be sorted by event period correctly when clicked', () => {
		const { container } = renderer()

		const tableHead = container.querySelectorAll('thead tr th')[2]

		const firstRow = container.querySelector(
			'tbody tr:nth-child(1) td:nth-child(3)'
		)
		const secondRow = container.querySelector(
			'tbody tr:nth-child(2) td:nth-child(3)'
		)
		const thirdRow = container.querySelector(
			'tbody tr:nth-child(3) td:nth-child(3)'
		)
		const forthRow = container.querySelector(
			'tbody tr:nth-child(4) td:nth-child(3)'
		)
		fireEvent.click(tableHead)
		expect(firstRow.textContent).toBe('04-Aug-2022-01:53 - 01:53')
		expect(secondRow.textContent).toBe('25-Aug-2022-12:00 - 04:00')
		expect(thirdRow.textContent).toBe('2022-09-03T01:57:03.657Z')
		expect(forthRow.textContent).toBe('2022-09-03T01:57:03.657Z')
	})
	// it('should be sorted by trainer name correctly when clicked', () => {
	// 	const { container } = renderer()

	// 	const tableHead = container.querySelectorAll('thead tr th')[3]

	// 	const firstRow = container.querySelector(
	// 		'tbody tr:nth-child(1) td:nth-child(4)'
	// 	)
	// 	const secondRow = container.querySelector(
	// 		'tbody tr:nth-child(2) td:nth-child(4)'
	// 	)
	// 	const thirdRow = container.querySelector(
	// 		'tbody tr:nth-child(3) td:nth-child(4)'
	// 	)
	// 	const forthRow = container.querySelector(
	// 		'tbody tr:nth-child(4) td:nth-child(4)'
	// 	)
	// 	fireEvent.click(tableHead)
	// 	expect(firstRow.textContent).toBe('Bruce wyne')
	// 	expect(secondRow.textContent).toBe('Bruce wyne')
	// 	expect(thirdRow.textContent).toBe('Johnny Depp')
	// 	expect(forthRow.textContent).toBe('Juwwita Susati')
	// })
	// it('should be sorted by rating correctly when clicked', () => {
	// 	const { container } = renderer()
	// 	const tableHead = container.querySelectorAll('thead tr th')[4]

	// 	const firstRow = container.querySelectorAll(
	// 		'tbody tr:nth-child(1) td:nth-child(5) svg'
	// 	)
	// 	const secondRow = container.querySelectorAll(
	// 		'tbody tr:nth-child(2) td:nth-child(5) svg'
	// 	)
	// 	const thirdRow = container.querySelectorAll(
	// 		'tbody tr:nth-child(3) td:nth-child(5) svg'
	// 	)
	// 	const forthRow = container.querySelectorAll(
	// 		'tbody tr:nth-child(4) td:nth-child(5) svg'
	// 	)
	// 	fireEvent.click(tableHead)
	// 	expect(firstRow.length).not.toBe(2)
	// 	expect(secondRow.length).not.toBe(3)
	// 	expect(thirdRow.length).not.toBe(4)
	// 	expect(forthRow.length).not.toBe(5)
	// })
	// it('should be sorted by aditional info correctly when clicked', () => {
	// 	const { container } = renderer()
	// 	const tableHead = container.querySelectorAll('thead tr th')[5]

	// 	const firstRow = container.querySelector(
	// 		'tbody tr:nth-child(1) td:nth-child(6)'
	// 	)
	// 	const secondRow = container.querySelector(
	// 		'tbody tr:nth-child(2) td:nth-child(6)'
	// 	)
	// 	const thirdRow = container.querySelector(
	// 		'tbody tr:nth-child(3) td:nth-child(6)'
	// 	)
	// 	const forthRow = container.querySelector(
	// 		'tbody tr:nth-child(4) td:nth-child(6)'
	// 	)
	// 	fireEvent.click(tableHead)
	// 	expect(firstRow.textContent).toBe(
	// 		'Velit commodo ipsum nostrud nostrud anim minim esse.'
	// 	)
	// 	expect(secondRow.textContent).toBe(
	// 		'Ad irure non ex do Exercitation dolore qui elit.'
	// 	)
	// 	expect(thirdRow.textContent).toBe(
	// 		'Quis aliqua cupidatat quis ullamco sit ea.'
	// 	)
	// 	expect(forthRow.textContent).toBe(
	// 		'Exercitation nostrud irure consectetur duis.'
	// 	)
	// })
})

// describe('TrainingTable with infinite scroll', () => {
// 	const renderer = () => render(<TrainingTable data={data2} infiniteScroll />)

// 	it('should only renders 10 rows in the table initially', () => {
// 		const { container } = renderer()
// 		const tableRows = container.querySelectorAll('tbody tr')
// 		expect(tableRows.length).toBe(10)
// 	})
// 	it('should be able to load more data when scrolled to bottom', () => {
// 		const { container } = renderer()
// 		const tableBody = container.querySelector('tbody')
// 		const lastRow = tableBody.querySelector('tbody tr:nth-child(4)')
// 		const tableBodyHeight = tableBody.offsetHeight
// 		const tableFooterHeight = lastRow.offsetHeight
// 		const tableBodyBottom = tableBody.getBoundingClientRect().bottom
// 		const tableFooterTop = lastRow.getBoundingClientRect().top
// 		const scrollHeight = tableBodyHeight + tableFooterHeight
// 		const scrollPosition = tableBodyBottom - tableFooterTop
// 		const newRow = tableBody.querySelector('tbody tr:nth-child(11)')
// 		expect(newRow).toBeNull()

// 		fireEvent.scroll(window, { target: { scrollY: scrollPosition } })
// 		expect(tableBody.offsetHeight).toBe(scrollHeight)
// 		expect(newRow).toBeDefined()
// 	})
// })
