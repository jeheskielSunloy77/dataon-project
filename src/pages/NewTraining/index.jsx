import { HeaderSection } from '@/components/index'
import { PlusSquareOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Radio, Select, Upload } from 'antd'
import './NewTraining.css'

const CreateTraining = () => {
	const onFinish = (value) => {
		console.log(value)
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
					initialValues={{ providerType: 'internal' }}
					onFinish={onFinish}
					className='sm:px-[10%]'
				>
					<div className='flex flex-col'>
						<Form.Item label='Event No' name='eventNo'>
							TASDIAINXA-XSDODASD-SDKNSKD12
						</Form.Item>
						<FormInput label='Event Type' name='eventType' required />
						<FormInput label='Training Course' name='trainingCourse' required />
						<FormInput label='Event Name' name='name' required />
						<Form.Item label='Provider Type' name='providerType' required>
							<Radio.Group>
								<Radio.Button value='internal'>Internal</Radio.Button>
								<Radio.Button value='external'>External</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<Form.Item
							label='Provider'
							name='provider'
							rules={[
								{
									required: true,
									message: 'Please select the provider!',
								},
							]}
						>
							<Select placeholder='Select a Provider'>
								<Select.Option value='jack'>Provider1</Select.Option>
								<Select.Option value='lucy'>Provider2</Select.Option>
								<PlusSquareOutlined style={{ color: '#1890ff', fontSize: '30px' }} />
							</Select>
						</Form.Item>
						<Form.Item label='Event Thumbnail' name='eventThumbnail'>
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
							<DatePicker.RangePicker />
						</Form.Item>
						<Form.Item
							label='Status'
							name='status'
							rules={[
								{
									required: true,
									message: 'Please input the status!',
								},
							]}
						>
							<Radio.Group>
								<Radio.Button value='draft'>Draft</Radio.Button>
								<Radio.Button value='open'>Open For Registration</Radio.Button>
								<Radio.Button value='closed'>Closed For Registration</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<div className='flex justify-end py-6'>
							<Button type='primary' htmlType='submit' className='btnPrimary mr-10'>
								Submit
							</Button>
						</div>
					</div>
				</Form>
			</section>
		</div>
	)
}

const FormInput = ({ label, name, required }) => (
	<Form.Item
		label={label}
		name={name}
		rules={[
			{
				required: required,
				message: `Please input the ${label}!`,
			},
		]}
	>
		<Input placeholder={`Enter the ${label}`} />
	</Form.Item>
)

export default CreateTraining
