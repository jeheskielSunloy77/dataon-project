import { FormTextInput, HeaderSection } from '@/components/index'
import { transferMockKeys, trasnferMockData } from '@/mockData'
import { customAxios, getUser } from '@/utils/index'
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
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import './NewTraining.css'
const { RangePicker } = DatePicker

const NewTraining = () => {
	const [transferKeys, setTransferKeys] = useState(transferMockKeys)
	const [onlineClass, setOnlineClass] = useState(false)
	const isEditPage = window.location.pathname.includes('/edit-training')
	const [formData, setFormData] = useState(null)
	const navigate = useNavigate()
	const params = useParams()
	const { t } = useTranslation()
	const { role, userId } = getUser()

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
		role === 'admin'
			? isEditPage
				? fetchData()
				: setFormData({})
			: navigate('/')
	}, [])

	const upsertData = (value) => {
		const { date, ...rest } = value
		const data = {
			...rest,
			userId: userId,
			startDate: moment(date[0]).format(),
			endDate: moment(date[1]).format(),
		}

		if (isEditPage) customAxios.put(`trainings/${params.id}`, data)
		else customAxios.post('trainings', data)

		navigate('/')
		notification.close('confirm')
		notification.success({
			message: t('Training saved successfully'),
		})
	}

	const onFormFinish = (value) => {
		notification.open({
			message: t('Are you sure you want to save this training?'),
			btn: (
				<Button
					type='primary'
					className='rounded-lg px-8 btnPrimary'
					onClick={() => upsertData(value)}
				>
					{t('Confirm')}
				</Button>
			),
			key: 'confirm',
			onClose: close(),
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
						{formData.id && (
							<Form.Item label={t('Event Number')}>{formData.id}</Form.Item>
						)}

						<Form.Item
							label={t('Event Type')}
							name='isOnline'
							rules={[
								{
									required: true,
									message: t('Please select the Event Type!'),
								},
							]}
						>
							<Radio.Group
								onChange={(e) => setOnlineClass(e.target.value)}
								className='space-x-2'
							>
								<Radio.Button
									value={true}
									data-testid='onlineClass'
									style={{ borderRadius: '4px' }}
								>
									{t('Online Class')}
								</Radio.Button>
								<Radio.Button
									value={false}
									data-testid='offlineClass'
									style={{ borderRadius: '4px' }}
								>
									{t('Offline Class')}
								</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<FormTextInput label={t('Training Course')} required />
						<FormTextInput label={t('Event Name')} name='name' required />
						<FormTextInput label={t('Trainer Name')} name='trainerName' required />
						{!onlineClass && (
							<>
								<FormTextInput
									label={t('Location')}
									name='location'
									required={!onlineClass}
								/>
								<FormTextInput
									label={t('Longitude')}
									name='longitude'
									required={!onlineClass}
								/>
								<FormTextInput
									label={t('Latitude')}
									name='latitude'
									required={!onlineClass}
								/>
							</>
						)}
						<Form.Item label={t('Provider Type')}>
							<Radio.Group className='space-x-2'>
								<Radio.Button value='internal' style={{ borderRadius: '4px' }}>
									Internal
								</Radio.Button>
								<Radio.Button value='external' style={{ borderRadius: '4px' }}>
									External
								</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<Form.Item label={t('Provider')}>
							<Select placeholder={t('Select A Provider')}>
								<Select.Option value='provider1'>{t('Provider 1')}</Select.Option>
								<Select.Option value='provider2'>{t('Provider 2')}</Select.Option>
								<PlusSquareOutlined
									style={{
										color: '#1890ff',
										fontSize: '30px',
									}}
								/>
							</Select>
						</Form.Item>
						<Form.Item label={t('Event Thumbnail')}>
							<Upload>
								<Button icon={<UploadOutlined />} style={{ borderRadius: '4px' }}>
									{t('Click To Upload')}
								</Button>
							</Upload>
							<p className='p-0 text-light'>
								{t(
									'Recomended image resolution is 500x300 (5:3 aspect ratio) with max 2MB .jpeg/jpg'
								)}
							</p>
						</Form.Item>
						<Form.Item
							label={t('Date')}
							name='date'
							rules={[
								{
									required: true,
									message: t('Please input the date!'),
								},
							]}
						>
							<RangePicker showTime />
						</Form.Item>
						<Form.Item
							label='Status'
							name='isComplete'
							rules={[
								{
									required: true,
									message: t('Please select the event status!'),
								},
							]}
						>
							<Radio.Group className='flex'>
								<Radio.Button value={false} style={{ borderRadius: '4px' }}>
									{t('Open For Registration')}
								</Radio.Button>
								<Radio.Button value={true} style={{ borderRadius: '4px' }}>
									{t('Event Completed')}
								</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<Form.Item
							label={t('Aditional Info')}
							name='information'
							rules={[
								{
									required: true,
									message: t('Please fill in the aditional information!'),
								},
							]}
						>
							<Input.TextArea rows={4} />
						</Form.Item>
						{isEditPage && (
							<Form.Item label={t('Participants')}>
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
