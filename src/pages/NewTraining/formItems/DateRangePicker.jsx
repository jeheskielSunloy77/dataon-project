import { DatePicker, Form } from 'antd'

const DateRangePicker = () => (
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
)

export default DateRangePicker
