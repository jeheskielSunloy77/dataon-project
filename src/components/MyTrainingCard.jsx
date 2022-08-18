import { TeamOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
const MyTrainingCard = ({
	image,
	name,
	location,
	period,
	trainerName,
	type,
}) => (
	<Card
		actions={[
			<Button type='link' key='status' className='font-bold'>
				Event Started
			</Button>,
			<Button type='primary' icon={location && <LocationIcon />} key='location'>
				{location ? 'View Location' : 'Give Feedback'}
			</Button>,
		]}
	>
		<div className='flex gap-4 rounded-lg'>
			<img src={image} className='bg-red-200 w-[30%]' alt='card image' />
			<div className=''>
				{location && (
					<p>
						<LocationIcon />
						{location}
					</p>
				)}
				{type === 'Online Event' && (
					<>
						<UrlIcon />
						<p>Online Event</p>
					</>
				)}
				<h1>{name}</h1>
				<p>{period}</p>
				<p>
					<TeamOutlined />
					{trainerName}
				</p>
			</div>
		</div>
	</Card>
)

const UrlIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-5 w-5'
		viewBox='0 0 20 20'
		fill='currentColor'
	>
		<path
			fillRule='evenodd'
			d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
			clipRule='evenodd'
		/>
	</svg>
)
const LocationIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-3 w-4'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
		/>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
		/>
	</svg>
)

export default MyTrainingCard
