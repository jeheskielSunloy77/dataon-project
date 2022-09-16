import { HeaderSection } from '@/components/index'
import { transferMockData, transferMockKeys } from '@/utils/index'
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
import { useState } from 'react'
import './UpsertTraining.css'
import upsertTrainingHandlers from './upsertTrainingHandlers'
const { RangePicker } = DatePicker

const UpsertTraining = () => {
	const [onlineClass, setOnlineClass] = useState(false)
	const [transferKeys, setTransferKeys] = useState(transferMockKeys)

	const { formData, onFormFinish, t, isEditPage } = upsertTrainingHandlers()

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
						<FormInput type='number' disabled label={t('Event Number')} name='id' />
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
						<FormInput label={t('Training Course')} required />
						<FormInput label={t('Event Name')} name='name' required />
						<FormInput label={t('Trainer Name')} name='trainer' required />
						{!onlineClass && (
							<>
								<FormInput
									label={t('Location')}
									name='location'
									required={!onlineClass}
								/>
								<FormInput
									label={t('Longitude')}
									name='longitude'
									required={!onlineClass}
								/>
								<FormInput
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
						<FormInput label={t('Image Url')} name='image' required />
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
									dataSource={transferMockData}
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
const FormInput = ({ label, name, required, disabled, type }) => (
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
		<Input
			type={type || 'text'}
			placeholder={`Enter the ${label}`}
			className={`${name}Input`}
			disabled={disabled}
		/>
	</Form.Item>
)

export default UpsertTraining
