import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroll-component'
import CardsSkeleton from '../CardsSkeleton'
import AllTrainingsCard from './AllTrainingsCard'

const AllTrainingsCards = ({ setPageLimit, cardsData, dataLength }) => {
	const { t } = useTranslation()

	const fetchMoreData = () => {
		if (cardsData.length >= dataLength) return false
		else setPageLimit((prev) => prev + 10)
	}

	return (
		<InfiniteScroll
			dataLength={cardsData?.length || 0}
			next={fetchMoreData}
			hasMore={cardsData?.length < dataLength}
			endMessage={
				<h1 className='col-span-full mx-auto text-accent my-3'>
					{t('Your All Cought Up!')}
				</h1>
			}
			loader={
				<CardsSkeleton
					count={5}
					height='350px'
					className='grid grid-cols-5 gap-3 col-span-full'
				/>
			}
			className='relative grid sm:grid-cols-5'
		>
			{cardsData.map(
				({ id, name, location, trainerName, isOnline, image, period }, index) => (
					<AllTrainingsCard
						key={index}
						name={name}
						image={image}
						location={location}
						trainerName={trainerName}
						isOnline={isOnline}
						period={period}
						id={id}
					/>
				)
			)}
		</InfiniteScroll>
	)
}

export default AllTrainingsCards
