import { render } from '@testing-library/react'
import { expect } from 'vitest'
import { default as CardsSkeleton } from '.'

describe('Cards Skeleton', () => {
	it('should render Cards Skeleton', () => {
		const { container } = render(
			<CardsSkeleton
				count={5}
				height='350px'
				className='grid grid-cols-5 gap-3 col-span-full'
			/>
		)
		expect(container).toBeTruthy()
	})
})
