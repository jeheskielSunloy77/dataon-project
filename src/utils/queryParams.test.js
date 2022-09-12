import { describe } from 'vitest'
import queryParams from './queryParams'
describe('queryParams', () => {
	it('should parse query params and serialize them', () => {
		const params = {
			name: 'John',
			age: '30',
		}
		const endpoint = 'http://localhost:3000/users'
		const pageLimit = 10
		const result = queryParams(endpoint, params, pageLimit)
		expect(result).toBe('http://localhost:3000/users?name=John&age=30')
	})
})
