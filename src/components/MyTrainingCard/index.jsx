import { TeamOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import { Icon } from '../index'
const MyTrainingCard = ({
	image,
	name,
	location,
	period,
	trainerName,
	isOnline,
	isComplete,
	id,
}) => (
	<>
		<Card
			bodyStyle={{ borderRadius: '10px' }}
			actions={[
				<Button
					type='link'
					key='status'
					className='font-bold text-sm text-[#1890ff] cursor-default'
				>
					{isComplete ? 'Event Completed' : 'Upcoming Event'}
				</Button>,
				<Button
					type='primary'
					icon={location && !isComplete && <Icon name='MapPin' />}
					key='location'
					className='btnPrimary'
					href={`/detailTraining/${id}`}
				>
					{(location && !isComplete && 'View Location') ||
						(isComplete && 'Give Feedback')}
				</Button>,
			]}
			className='trainingCard max-w-md'
		>
			<div className='flex gap-4'>
				<img
					src={image}
					className='bg-gray-200 w-[30%] rounded-l-lg  object-cover'
					alt='card image'
					loading='lazy'
				/>
				<div className='p-2'>
					{location && !isOnline ? (
						<p>
							<Icon name='MapPin' />
							{location}
						</p>
					) : (
						<p>
							<Icon name='Url' />
							Online Event
						</p>
					)}
					<h1 className='font-semibold text-lg'>{name}</h1>
					<time>{period}</time>
					<p className='mt-2'>
						<TeamOutlined className='mr-2' />
						{trainerName}
					</p>
				</div>
			</div>
		</Card>
		<style jsx='true'>{`
			.trainingCard .ant-card-body {
				padding: 0.5rem;
			}
		`}</style>
	</>
)

export default MyTrainingCard
