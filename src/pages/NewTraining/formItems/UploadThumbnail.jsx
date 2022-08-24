import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Upload } from 'antd'

const UploadThumbnail = () => (
	<Form.Item label='Event Thumbnail' name='eventThumbnail'>
		<Upload>
			<Button icon={<UploadOutlined />}>Click to Upload</Button>
		</Upload>
		<p className='p-0 text-light'>
			Recomended image resolution is 500x300 (5:3 aspect ratio) with max 2MB
			.jpeg/jpg
		</p>
	</Form.Item>
)

export default UploadThumbnail
