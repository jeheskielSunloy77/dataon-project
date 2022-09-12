import { describe, it } from 'vitest'
import parsePeriod from './parsePeriod'

describe('parsePeriod function', () => {
	it('should parse a strings of date to be period format', () => {
		const startDate = '2022-09-21T15:00:00+07:00'
		const endDate = '2022-09-21T21:00:00+07:00'
		const result = parsePeriod(startDate, endDate)
		expect(result).toBe('Sep 21, 2022-15-00 - 21-00')
	})
})
