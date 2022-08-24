import { DatePicker, Form } from 'antd'
const { RangePicker } = DatePicker

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
		<RangePicker showTime />
	</Form.Item>
)

export default DateRangePicker
