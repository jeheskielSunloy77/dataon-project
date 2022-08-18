import nextArrowImg from '@/assets/nextArrow.svg'
import prevArrowImg from '@/assets/prevArrow.svg'
import { MyTrainingCard } from '@/components/index'
import useCheckMobile from '@/hooks/useCheckMobile'
import { AppContext } from '@/utils/AppContext'
import { Carousel } from 'antd'
import { useContext } from 'react'

const MyTrainingCarousel = () => {
	const { myTrainingData } = useContext(AppContext)
	const mobile = useCheckMobile()

	const cards = myTrainingData.map(
		({ name, image, location, period, trainerName, type }, index) => (
			<MyTrainingCard
				key={index}
				name={name}
				image={image}
				location={location}
				trainerName={trainerName}
				type={type}
				period={period}
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
				nextArrow={<img src={nextArrowImg} />}
				prevArrow={<img src={prevArrowImg} />}
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
			`}</style>
		</>
	)
}

export default MyTrainingCarousel
