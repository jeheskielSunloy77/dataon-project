import { TeamOutlined } from '@ant-design/icons'
import { Card, Spin } from 'antd'
import { memo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Icon from '../Icon'

const MemoizedTrainingsCards = ({ setPageLimit, cardsData, dataLength }) => {
	const fetchMoreData = () => {
		if (cardsData.length >= dataLength) {
			return false
		} else setPageLimit((prev) => prev + 5)
	}

	return (
		<InfiniteScroll
			dataLength={cardsData.length}
			next={fetchMoreData}
			hasMore={cardsData.length < dataLength}
			loader={
				<Spin className='absolute bottom-0 left-1/2 -translate-x-1/2' spinning />
			}
			className='relative grid sm:grid-cols-5 gap-x-2 gap-y-6 pb-6'
		>
			{cardsData.map(
				({ name, location, trainerName, isOnline, period }, index) => (
					<TrainingsCard
						key={index}
						name={name}
						image={`https://picsum.photos/seed/${index + 1}/200/300`}
						location={location}
						trainerName={trainerName}
						isOnline={isOnline}
						period={period}
					/>
				)
			)}
		</InfiniteScroll>
	)
}

const TrainingsCard = ({
	image,
	name,
	location,
	period,
	trainerName,
	isOnline,
}) => (
	<Card className='trainingCard max-w-md text-light cursor-pointer hover:shadow-2xl hover:scale-105 hover:z-40 transition-all'>
		<img
			src={image}
			className='h-[200px] w-full rounded-t-lg'
			alt='card image'
			loading='lazy'
		/>
		{location && !isOnline ? (
			<p className='mb-0 mt-2'>
				<Icon name='MapPin' />
				{location}
			</p>
		) : (
			<p className='mb-0 mt-2'>
				<Icon name='Url' />
				Online Event
			</p>
		)}
		<h1 className='font-semibold text-lg mb-8'>{name}</h1>
		<time>{period}</time>
		<p className='mt-2'>
			<TeamOutlined className='mr-2' />
			{trainerName}
		</p>
	</Card>
)
const AllTrainingsCards = memo(MemoizedTrainingsCards)

export default AllTrainingsCards
