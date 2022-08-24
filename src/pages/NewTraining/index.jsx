import { FormTextInput, HeaderSection } from '@/components/index'
import customAxios from '@/utils/axios'
import { PlusSquareOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Radio, Select, Upload } from 'antd'
import jwt_decode from 'jwt-decode'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NewTraining.css'
const { RangePicker } = DatePicker

const NewTraining = () => {
	const [onlineClass, setOnlineClass] = useState(false)
	const navigate = useNavigate()

	const onFormFinish = (value) => {
		const token = localStorage.getItem('token')
		const { userId } = jwt_decode(token)

		const { date, ...rest } = value
		const formatedDate = date.map((item) => item.format('DD-MMM-YYYY-hh:mm'))
		const data = {
			...rest,
			userId,
			startDate: formatedDate[0],
			endDate: formatedDate[1],
		}
		// console.log(data)
		customAxios.post('trainings', data)
		navigate('/')
	}

	const onFormChange = ({ isOnline }) => {
		setOnlineClass(isOnline)
	}

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
					initialValues={{ isOnline: onlineClass }}
					onValuesChange={onFormChange}
					onFinish={onFormFinish}
					className='sm:px-[10%] new-training-form'
				>
					<Form.Item label='Event No'>TASDIAINXA-XSDODASD-SDKNSKD12</Form.Item>
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
						<Radio.Group>
							<Radio.Button value={true}>Online Calss</Radio.Button>
							<Radio.Button value={false}>Offline Class</Radio.Button>
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
					<div className='flex justify-end py-6'>
						<Button type='primary' htmlType='submit' className='btnPrimary mr-10'>
							Submit
						</Button>
					</div>
				</Form>
			</section>
		</div>
	)
}

export default NewTraining
