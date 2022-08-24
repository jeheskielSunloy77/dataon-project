import { Form, Radio } from 'antd'

const SelectStatus = () => (
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
)

export default SelectStatus
