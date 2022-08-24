import { Form, Radio } from 'antd'

const SelectProviderType = () => (
	<Form.Item label='Provider Type' name='providerType' required>
		<Radio.Group>
			<Radio.Button value='internal'>Internal</Radio.Button>
			<Radio.Button value='external'>External</Radio.Button>
		</Radio.Group>
	</Form.Item>
)

export default SelectProviderType
