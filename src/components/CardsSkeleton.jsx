import { Skeleton } from 'antd'

const CardsSkeleton = ({ count, height, className }) => (
	<div style={{ height }} className={className}>
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
