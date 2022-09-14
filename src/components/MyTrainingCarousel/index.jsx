import { CardsSkeleton, MyTrainingCard } from '@/components/index'
import useCheckMobile from '@/hooks/useCheckMobile'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import './MyTrainingCarousel.css'

const MyTrainingCarousel = ({ carouselData, loading }) => {
	const mobile = useCheckMobile()
	const cards = carouselData.map(
		(
			{
				name,
				location,
				period,
				trainerName,
				isOnline,
				isComplete,
				image,
				id,
				latitude,
				longitude,
				rating,
			},
			index
		) => (
			<MyTrainingCard
				key={index}
				name={name}
				image={image}
				location={location}
				trainerName={trainerName}
				isOnline={isOnline}
				isComplete={isComplete}
				period={period}
				id={id}
				latitude={latitude}
				longitude={longitude}
				rating={rating}
			/>
		)
	)
	if (loading)
		return (
			<CardsSkeleton className='grid grid-cols-3 gap-3' count={3} height='220px' />
		)
	else
		return (
			<Carousel
				lazyLoad='ondemand'
				swipeToSlide
				dots={false}
				draggable
				slidesToShow={mobile ? 1 : 3}
				arrows
				nextArrow={<RightOutlined />}
				prevArrow={<LeftOutlined />}
				className='relative'
			>
				{cards}
			</Carousel>
		)
}

export default MyTrainingCarousel
