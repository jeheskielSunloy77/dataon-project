import { HeaderSection } from '@/components/index'
import {
	CalendarOutlined,
	InfoCircleOutlined,
	PlusOutlined,
	SolutionOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Button, Card, Skeleton } from 'antd'
import { useState } from 'react'
import './DetailTraining.css'
import detailTrainingHandlers from './detailTrainingHandlers'

const DetailTraining = () => {
	const [loading, setLoading] = useState(true)
	const { t, editTraining, deleteTraining, joinClass, isTaken, trainingData } =
		detailTrainingHandlers()

	const {
		isOnline,
		isComplete,
		startDate,
		endDate,
		location,
		trainerName,
		name,
		image,
	} = trainingData

	return (
		<main className='pageContainer space-y-2'>
			<HeaderSection />
			<div className='sectionContainer'>
				<h1 className='capitalize'>{name}</h1>
				<p className='text-xl text-light'>{t('Training Class')}</p>
				<div className='sm:flex sm:gap-4 space-y-4'>
					<Card className='sm:w-1/2 cardPrimary'>
						{loading && (
							<Skeleton.Image
								active
								style={{
									height: '400px',
									width: '100%',
									borderRadius: '6px',
								}}
								className='w-full h-[400px]'
							/>
						)}
						<img
							src={image}
							alt='class image'
							className='w-full h-[400px] rounded-xl object-cover'
							onLoad={() => setLoading(false)}
						/>
						<Button
							type='primary'
							className='btnPrimary w-full my-4'
							disabled={isTaken}
							onClick={joinClass}
						>
							{t('Join Class')}
						</Button>
						<div className='flex justify-between'>
							<div className='flex space-x-2'>
								<p>{t('Joined Team')}</p>
								<img
									src='https://picsum.photos/200/300'
									className='w-6 h-6 rounded-full'
									alt='teams image'
								/>
							</div>
							<p className='text-light cursor-pointer'>
								<PlusOutlined className='mr-2' />
								{t('Invite Others')}
							</p>
						</div>
					</Card>
					<div className='sm:w-1/2 space-y-4'>
						<Card className='px-10 cardPrimary'>
							<h1 className='text-xl'>
								<SolutionOutlined className='mr-2' />
								{t('Overview')}
							</h1>
							<div className='flex space-x-6'>
								<p>
									<CalendarOutlined className='mr-2' />
									{startDate}
								</p>
								<p>
									<InfoCircleOutlined className='mr-2' />
									{isOnline ? t('Online Class') : t('Offline Class')}
								</p>
								<p>
									<UserOutlined className='mr-2' />
									<span className='text-green-500'>1</span>/3 {t('Person')}
								</p>
							</div>
							<h1 className='text-lg'>{t('Instructor')}</h1>
							<div className='flex'>
								<img
									src='https://picsum.photos/200/300'
									className='w-10 h-10 rounded-full mr-2'
									alt='instructor image'
								/>
								<p>
									{trainerName}
									<p className='text-light'>{t('Professional Trainer')}</p>
								</p>
							</div>
						</Card>
						<Card title={t('Resources')} className='detailTrainingCard cardPrimary'>
							<h1 className='text-xl'>
								<SolutionOutlined className='mr-2' />
								{isOnline ? t('Online Class') : t('Offline Class')} {t('Details')}
							</h1>
							<h1 className='text-lg'>{t('Date')}</h1>
							<p className='text-light'>{`${startDate} - ${endDate.slice(12)}`}</p>
							<h1 className='text-lg'>{t('Location')}</h1>
							<p className='text-light'>{location}</p>
							<h1 className='text-lg'>{t('Target Participants')}</h1>
							<p className='text-light'>{t('Students')}</p>
							<h1 className='text-lg'>Status</h1>
							<p className='text-light'>
								{isComplete ? t('Event Complete') : t('Open For Registration')}
							</p>
							<h1 className='text-lg'>{t('End Date')}</h1>
							<p className='text-light'> {endDate}</p>
						</Card>
					</div>
				</div>
				<div className='flex justify-center sm:justify-end space-x-2 my-6'>
					<Button className='btnDefault px-8' href='/'>
						{t('Back')}
					</Button>
					<Button
						type='primary'
						className='rounded-lg px-8 btnPrimary'
						onClick={editTraining}
					>
						{t('Edit')}
					</Button>
					<Button className='btnDanger border-none px-8' onClick={deleteTraining}>
						{t('Delete')}
					</Button>
				</div>
			</div>
		</main>
	)
}

export default DetailTraining
