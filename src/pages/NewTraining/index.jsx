import { HeaderSection } from '@/components/index'
import { Form } from 'antd'
import {
	DateRangePicker,
	SelectProvider,
	SelectProviderType,
	SelectStatus,
	SubmitButton,
	TextInput,
	UploadThumbnail,
} from './formItems/index'
import './NewTraining.css'

const NewTraining = () => {
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
					<Form.Item label='Event No' name='eventNo'>
						TASDIAINXA-XSDODASD-SDKNSKD12
					</Form.Item>
					<TextInput label='Event Type' name='eventType' required />
					<TextInput label='Training Course' name='trainingCourse' required />
					<TextInput label='Event Name' name='name' required />
					<SelectProviderType />
					<SelectProvider />
					<UploadThumbnail />
					<DateRangePicker />
					<SelectStatus />
					<SubmitButton />
				</Form>
			</section>
		</div>
	)
}

export default NewTraining
