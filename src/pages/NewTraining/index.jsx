import { FormTextInput, HeaderSection } from '@/components/index'
import { trasnferMockData } from '@/mockData'
import customAxios from '@/utils/axios'
import { PlusSquareOutlined, UploadOutlined } from '@ant-design/icons'
import {
	Button,
	DatePicker,
	Form,
	Input,
	Radio,
	Select,
	Spin,
	Transfer,
	Upload,
} from 'antd'
import jwt_decode from 'jwt-decode'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './NewTraining.css'
const { RangePicker } = DatePicker

const NewTraining = () => {
	const [transferMockKeys, setTransferMockKeys] = useState(transferMockKeys)
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
		const token = localStorage.getItem('token')
		const { userId } = jwt_decode(token)

		const { date, ...rest } = value
		const data = {
			...rest,
			userId,
			startDate: date[0],
			endDate: date[1],
		}

		if (isEditPage) {
			customAxios.put(`trainings/${params.id}`, data)
			navigate('/')
		} else {
			customAxios.post('trainings', data)
			navigate('/')
		}
	}

	if (!formData) return <Spin className='centerAbsolute' />
	else
		return (
			<div className='pageContainer space-y-2'>
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
						initialValues={formData || { isOnline: false }}
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
									targetKeys={transferMockKeys}
									onChange={(newTargetKeys) => setTransferMockKeys(newTargetKeys)}
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
			</div>
		)
}

export default NewTraining
