import { HeaderSection } from '@/components/index'
import customAxios from '@/utils/axios'
import {
	CalendarOutlined,
	InfoCircleOutlined,
	PlusOutlined,
	SolutionOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Button, Card, Spin } from 'antd'
import jwt_decode from 'jwt-decode'
import moment from 'moment'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailTraining.css'

const DetailTraining = () => {
	const [trainingData, setTrainingData] = useState(null)
	const { id } = useParams()
	const token = localStorage.getItem('token')
	const { userId } = jwt_decode(token)

	const fetchData = useCallback(async () => {
		try {
			const response = await customAxios.get(`/trainings/${id}`)
			setTrainingData(response.data.data)
		} catch (error) {
			throw new Error(error)
		}
	}, [])
	useEffect(() => {
		fetchData()
	}, [])

	if (!trainingData) return <Spin className='centerAbsolute' />

	const { isOnline, startDate, endDate, location, trainerName, name } =
		trainingData

	const isPassed = () => {
		const today = new Date()
		const dateDiff = moment(startDate).diff(today, 'days')

		return dateDiff < 0
	}

	return (
		<div className='pageContainer space-y-2'>
			<HeaderSection />
			<div className='sectionContainer'>
				<h1>{name}</h1>
				<p className='text-xl text-light'>Training Class</p>
				<div className='sm:flex'>
					<Card className='sm:w-1/2'>
						<img
							src={`https://picsum.photos/seed/${id}/700/500`}
							alt='class image'
							className='w-full h-[300px] rounded-xl object-cover'
						/>
						<Button
							type='primary'
							className='btnPrimary w-full my-4'
							disabled={trainingData.userId !== userId}
						>
							Join Class
						</Button>
						<div className='flex justify-between'>
							<div className='flex space-x-2'>
								<p>Joined Team</p>
								<img
									src='https://picsum.photos/200/300'
									className='w-6 h-6 rounded-full'
									alt='teams image'
								/>
							</div>
							<p className='text-light'>
								<PlusOutlined />
								Invite others
							</p>
						</div>
					</Card>
					<div className='sm:w-1/2'>
						<div className='px-10'>
							<h1 className='text-xl'>
								<SolutionOutlined className='mr-2' />
								Overview
							</h1>
							<div className='flex space-x-6'>
								<p>
									<CalendarOutlined className='mr-2' />
									{startDate}
								</p>
								<p>
									<InfoCircleOutlined className='mr-2' />
									{isOnline ? 'Online Class' : 'Offline Class'}
								</p>
								<p>
									<UserOutlined className='mr-2' />
									<span className='text-green-500'>1</span>/3 Person
								</p>
							</div>
							<h1 className='text-lg'>Instructor</h1>
							<div className='flex'>
								<img
									src='https://picsum.photos/200/300'
									className='w-10 h-10 rounded-full mr-2'
									alt='instructor image'
								/>
								<p>
									{trainerName}
									<p className='text-light'>Professional Trainer</p>
								</p>
							</div>
						</div>
						<Card title='Resources' className='detailTrainingCard rounded-lg'>
							<h1 className='text-xl'>
								<SolutionOutlined className='mr-2' />
								Offline Class Detail
							</h1>
							<h1 className='text-lg'>Date</h1>
							<p className='text-light'>{`${startDate} - ${endDate.slice(12)}`}</p>
							<h1 className='text-lg'>Location</h1>
							<p className='text-light'>{location}</p>
							<h1 className='text-lg'>Target Participant</h1>
							<p className='text-light'>Students</p>
							<h1 className='text-lg'>Status</h1>
							<p className='text-light'>{isPassed() ? 'Closed' : 'Open'}</p>
							<h1 className='text-lg'>End Date</h1>
							<p className='text-light'> {endDate}</p>
						</Card>
					</div>
				</div>
				<div className='flex justify-end space-x-2'>
					<Button className='btnDefault px-8' href='/'>
						Back
					</Button>
					<Button
						type='primary'
						className='rounded-lg px-8 btnPrimary'
						href={`/editTraining/${id}`}
					>
						Edit
					</Button>
					<Button
						className='btnDanger border-none px-8'
						onClick={customAxios.delete(`trainings/${id}`)}
						href='/'
					>
						Delete
					</Button>
				</div>
			</div>
		</div>
	)
}

export default DetailTraining
