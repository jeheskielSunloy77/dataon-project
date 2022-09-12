import { Skeleton } from 'antd'

const CardsSkeleton = ({ count, height }) => (
	<div style={{ height }} className={`grid grid-cols-${count} gap-3`}>
		{Array.from({ length: count }).map((_, index) => (
			<Skeleton.Image
				key={index}
				style={{
					width: '100%',
					height: '100%',
					borderRadius: '10px',
				}}
				active
			/>
		))}
	</div>
)

export default CardsSkeleton
