import { MyTrainingCard } from '@/components/index'
import { Carousel } from 'antd'

const CardsSection = () => (
	<section className='sectionContainer'>
		<MyTrainingCard
			name='Training Angular'
			location='Dataon simprung, Jakarta selatan, ID'
			period='9 Jun 2021 08:00 - 12:00'
			trainerName='Juwwita Susati'
			image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
		/>
		<Carousel autoplay swipeToSlide draggable>
			<MyTrainingCard
				name='Training Angular'
				location='Dataon simprung, Jakarta selatan, ID'
				period='9 Jun 2021 08:00 - 12:00'
				trainerName='Juwwita Susati'
				image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
			/>
		</Carousel>
	</section>
)

export default CardsSection
