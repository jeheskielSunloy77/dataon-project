import { Icon, MyTrainingCard } from '@/components/index'
import useCheckMobile from '@/hooks/useCheckMobile'
import { Carousel } from 'antd'

const MyTrainingCarousel = ({ carouselData }) => {
	const mobile = useCheckMobile()
	const cards = carouselData.map(
		({ name, location, period, trainerName, isOnline, id }, index) => (
			<MyTrainingCard
				key={index}
				name={name}
				image={`https://picsum.photos/seed/${index + 1}/200/300`}
				location={location}
				trainerName={trainerName}
				isOnline={isOnline}
				period={period}
				id={id}
			/>
		)
	)

	return (
		<>
			<Carousel
				swipeToSlide
				dots={false}
				draggable
				slidesToShow={mobile ? 1 : 3}
				arrows
				nextArrow={<Icon name='nextArrow' />}
				prevArrow={<Icon name='prevArrow' />}
				className='relative'
			>
				{cards}
			</Carousel>
			<style jsx='true'>{`
				.slick-arrow {
					transform: scale(1.4);
					z-index: 20;
					background-color: #d1d5db !important;
					border-radius: 100%;
				}
				.slick-arrow.slick-next {
					right: 0;
				}
				.slick-arrow.slick-prev {
					left: 0;
				}
				.slick-slide {
					height: 100%;
				}
			`}</style>
		</>
	)
}

export default MyTrainingCarousel
