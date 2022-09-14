import { LinkOutlined, PushpinOutlined, TeamOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import SubmitRatingModal from '../RatingScore/SubmitRatingModal'

const MyTrainingCard = ({
	image,
	name,
	location,
	period,
	trainerName,
	isOnline,
	isComplete,
	id,
	latitude,
	longitude,
	rating,
}) => {
	const navigate = useNavigate()
	const [modal, setModal] = useState(false)
	const { t } = useTranslation()

	const handleButtonClick = () => {
		if (location && !isComplete)
			window.open(
				`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
				'_blank'
			)
		if (isComplete) setModal(true)
	}

	return (
		<>
			<Card
				bodyStyle={{ borderRadius: '10px' }}
				actions={[
					<Button
						type='link'
						key='status'
						className='font-bold text-sm text-[#1890ff] cursor-default'
					>
						{isComplete ? t('Event Completed') : t('Upcoming Event')}
					</Button>,
					<Button
						type='primary'
						icon={!isOnline && !isComplete && <PushpinOutlined />}
						key='location'
						className='btnPrimary z-40'
						onClick={handleButtonClick}
					>
						{(!isOnline && !isComplete && t('View Location')) ||
							(isComplete && t('Give Feedback')) ||
							t('Online Class')}
					</Button>,
				]}
				className='trainingCard max-w-md hover:shadow-lg hover:z-40 transition-all m-3 cardPrimary'
			>
				<div
					className='flex gap-4 cursor-pointer'
					onClick={() => navigate(`/detail-training/${id}`)}
				>
					<img
						src={image}
						className='w-[30%] rounded-l-lg  object-cover'
						alt='card image'
					/>
					<div className='p-2'>
						{location && !isOnline ? (
							<p>
								<PushpinOutlined />
								{location}
							</p>
						) : (
							<p>
								<LinkOutlined />
								{t('Online Class')}
							</p>
						)}
						<h1 className='font-semibold text-lg capitalize'>{name}</h1>
						<time>{period}</time>
						<p className='mt-2'>
							<TeamOutlined className='mr-2' />
							{trainerName}
						</p>
					</div>
				</div>
			</Card>
			{modal && (
				<SubmitRatingModal
					setModal={setModal}
					modal={modal}
					id={id}
					rating={rating}
					element='.myTraining'
				/>
			)}
			<style jsx='true'>{`
				.trainingCard .ant-card-body {
					padding: 0.5rem;
				}
			`}</style>
		</>
	)
}

export default MyTrainingCard
