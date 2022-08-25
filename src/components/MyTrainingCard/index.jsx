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
	startDate,
	endDate,
}) => (
	<>
		<Card
			actions={[
				<Button type='link' key='status' className='font-bold'>
					{new Date(startDate) < new Date() && new Date() < new Date(endDate)
						? 'Event Completed'
						: 'Upcoming Event'}
				</Button>,
				<Button
					type='primary'
					icon={location && <Icon name='MapPin' />}
					key='location'
					className='btnPrimary'
				>
					{location ? 'View Location' : 'Give Feedback'}
				</Button>,
			]}
			className='trainingCard max-w-md'
		>
			<div className='flex gap-4'>
				<img
					src={image}
					className='bg-blue-500 w-[30%] rounded-l-lg'
					alt='card image'
				/>
				<div>
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
