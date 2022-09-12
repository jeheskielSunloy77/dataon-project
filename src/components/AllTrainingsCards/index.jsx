import { TeamOutlined } from '@ant-design/icons'
import { Card, Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import Icon from '../Icon'

const AllTrainingsCards = ({
	setPageLimit,
	cardsData,
	dataLength,
	// loading,
}) => {
	const fetchMoreData = () => {
		if (cardsData.length >= dataLength) return false
		else setPageLimit((prev) => prev + 5)
	}

	// if (loading) return <CardsSkeleton count={5} height='425px' />
	// else
	return (
		<InfiniteScroll
			dataLength={cardsData?.length || 0}
			next={fetchMoreData}
			hasMore={cardsData?.length < dataLength}
			loader={
				<Spin className='absolute bottom-0 left-1/2 -translate-x-1/2' spinning />
			}
			className='relative grid sm:grid-cols-5 gap-x-2 gap-y-6 p-2'
		>
			{cardsData.map(
				({ name, location, trainerName, isOnline, image, period }, index) => (
					<TrainingsCard
						key={index}
						name={name}
						image={image}
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
	<Card
		bodyStyle={{ borderRadius: '10px' }}
		className='trainingCard max-w-md text-light cursor-pointer hover:shadow-2xl hover:scale-105 hover:z-40 transition-all'
	>
		<img
			src={image}
			className='h-[200px] w-full rounded-t-lg object-contain'
			alt='card image'
			loading='lazy'
		/>
		<div className='p-2'>
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
		</div>
	</Card>
)

export default AllTrainingsCards
