import { Form, Input } from 'antd'

const TextInput = ({ label, name, required }) => (
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

export default TextInput
