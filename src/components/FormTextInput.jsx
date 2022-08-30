import { Form, Input } from 'antd'

const FormTextInput = ({ label, name, required }) => (
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
		<Input placeholder={`Enter the ${label}`} className={`${name}Input`} />
	</Form.Item>
)

export default FormTextInput
