import { PlusSquareOutlined } from '@ant-design/icons'
import { Form, Select } from 'antd'

const SelectProvider = () => (
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
			<PlusSquareOutlined
				style={{
					color: '#1890ff',
					fontSize: '30px',
				}}
			/>
		</Select>
	</Form.Item>
)

export default SelectProvider
