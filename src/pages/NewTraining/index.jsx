import { FormTextInput, HeaderSection } from '@/components/index'
import { transferMockKeys, trasnferMockData } from '@/mockData'
import { AppContext } from '@/utils/AppContext'
import customAxios from '@/utils/axios'
import { PlusSquareOutlined, UploadOutlined } from '@ant-design/icons'
import {
	Button,
	DatePicker,
	Form,
	Input,
	notification,
	Radio,
	Select,
	Spin,
	Transfer,
	Upload,
} from 'antd'
import jwt_decode from 'jwt-decode'
import moment from 'moment'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './NewTraining.css'
const { RangePicker } = DatePicker

const NewTraining = () => {
	const [transferKeys, setTransferKeys] = useState(transferMockKeys)
	const [onlineClass, setOnlineClass] = useState(false)
	const [formData, setFormData] = useState(null)
	const navigate = useNavigate()
	const isEditPage = window.location.pathname.includes('/editTraining')
	const params = useParams()

	const fetchData = async () => {
		const response = await customAxios.get(`trainings/${params.id}`)
		const { startDate, endDate, ...rest } = response.data.data
		const date = [moment(startDate), moment(endDate)]
		const data = {
			date,
			...rest,
		}
		setFormData(data)
	}

	useEffect(() => {
		if (isEditPage) {
			const token = localStorage.getItem('token')
			const decoded = jwt_decode(token)
			decoded.userId === 'user123' ? fetchData() : navigate('/')
		} else setFormData({})
	}, [])

	const onFormFinish = (value) => {
		notification.open({
			message: 'Are you sure you want to save this training?',
			btn: (
				<Button
					type='primary'
					className='rounded-lg px-8 btnPrimary'
					onClick={() => upsertData(value)}
				>
					Confirm
				</Button>
			),
			key: 'confirm',
			onClose: close(),
		})
	}

	const upsertData = (value) => {
		const { userId } = useContext(AppContext)
		const { date, ...rest } = value
		const data = {
			...rest,
			userId,
			startDate: moment(date[0]).format(),
			endDate: moment(date[1]).format(),
		}

		if (isEditPage) customAxios.put(`trainings/${params.id}`, data)
		else customAxios.post('trainings', data)

		navigate('/')
		notification.close('confirm')
		notification.success({
			message: 'Training saved successfully',
		})
	}

	if (!formData) return <Spin className='centerAbsolute' />
	else
		return (
			<main className='pageContainer space-y-2'>
				<HeaderSection />
				<section className='sectionContainer'>
					<Form
						name='basic'
						labelCol={{
							span: 8,
						}}
						wrapperCol={{
							span: 16,
						}}
						initialValues={isEditPage ? formData : { isOnline: false }}
						onFinish={onFormFinish}
						className='sm:px-[10%] new-training-form'
					>
						<Form.Item label='Event No'>{formData.id}</Form.Item>

						<Form.Item
							label='Event Type'
							name='isOnline'
							rules={[
								{
									required: true,
									message: 'Please select the Event Type!',
								},
							]}
						>
							<Radio.Group onChange={(e) => setOnlineClass(e.target.value)}>
								<Radio.Button value={true} data-testid='onlineClass'>
									Online Calss
								</Radio.Button>
								<Radio.Button value={false} data-testid='offlineClass'>
									Offline Class
								</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<FormTextInput label='Training Course' required />
						<FormTextInput label='Event Name' name='name' required />
						<FormTextInput label='Trainer Name' name='trainerName' required />
						{!onlineClass && (
							<>
								<FormTextInput
									label='Location'
									name='location'
									required={!onlineClass}
								/>
								<FormTextInput
									label='Longtitude'
									name='longtitude'
									required={!onlineClass}
								/>
								<FormTextInput
									label='Latitude'
									name='latitude'
									required={!onlineClass}
								/>
							</>
						)}
						<Form.Item label='Provider Type'>
							<Radio.Group>
								<Radio.Button value='internal'>Internal</Radio.Button>
								<Radio.Button value='external'>External</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<Form.Item label='Provider'>
							<Select placeholder='Select a Provider'>
								<Select.Option value='jack'>Provider1</Select.Option>
								<Select.Option value='lucy'>Provider2</Select.Option>
								<PlusSquareOutlined
									style={{
										color: '#1890ff',
										fontSize: '30px',
									}}
								/>
							</Select>
						</Form.Item>
						<Form.Item label='Event Thumbnail'>
							<Upload>
								<Button icon={<UploadOutlined />}>Click to Upload</Button>
							</Upload>
							<p className='p-0 text-light'>
								Recomended image resolution is 500x300 (5:3 aspect ratio) with max 2MB
								.jpeg/jpg
							</p>
						</Form.Item>
						<Form.Item
							label='Date'
							name='date'
							rules={[
								{
									required: true,
									message: 'Please input the date!',
								},
							]}
						>
							<RangePicker showTime />
						</Form.Item>
						<Form.Item label='Status'>
							<Radio.Group>
								<Radio.Button value='draft'>Draft</Radio.Button>
								<Radio.Button value='open'>Open For Registration</Radio.Button>
								<Radio.Button value='closed'>Closed For Registration</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<Form.Item
							label='Aditional Information'
							name='information'
							rules={[
								{
									required: true,
									message: 'Please fill in the aditional information!',
								},
							]}
						>
							<Input.TextArea rows={4} />
						</Form.Item>
						{isEditPage && (
							<Form.Item label='Participants'>
								<Transfer
									dataSource={trasnferMockData}
									showSearch
									targetKeys={transferKeys}
									onChange={(newTargetKeys) => setTransferKeys(newTargetKeys)}
									render={(item) => item.name}
								/>
							</Form.Item>
						)}
						<div className='flex justify-end py-6'>
							<Button
								type='primary'
								htmlType='submit'
								className='btnPrimary mr-10'
								data-testid='btnSubmit'
							>
								Submit
							</Button>
						</div>
					</Form>
				</section>
			</main>
		)
}

export default NewTraining
