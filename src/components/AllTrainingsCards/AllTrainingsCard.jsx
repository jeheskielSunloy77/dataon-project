import { LinkOutlined, PushpinOutlined, TeamOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const AllTrainigsCard = ({
	image,
	name,
	location,
	period,
	trainerName,
	isOnline,
	id,
}) => {
	const navigate = useNavigate()
	const { t } = useTranslation()

	return (
		<Card
			bodyStyle={{ borderRadius: '10px' }}
			className='trainingCard max-w-md text-light cursor-pointer hover:shadow-xl hover:z-40 transition-all m-2 cardPrimary'
			onClick={() => navigate(`/detail-training/${id}`)}
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
						<PushpinOutlined className='mr-2' />

						{location}
					</p>
				) : (
					<p className='mb-0 mt-2'>
						<LinkOutlined className='mr-2' />

						{t('Online Class')}
					</p>
				)}
				<h1 className='font-semibold text-lg mb-8 capitalize'>{name}</h1>
				<time>{period}</time>
				<p className='mt-2'>
					<TeamOutlined className='mr-2' />
					{trainerName}
				</p>
			</div>
		</Card>
	)
}

export default AllTrainigsCard
