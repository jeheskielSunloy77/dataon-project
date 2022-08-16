import { Input } from 'antd'

const Searchbar = ({ label, placeholder, onSearch }) => (
	<label className='rounded-xl'>
		{label}
		<Input.Search placeholder={placeholder} onSearch={onSearch} />
	</label>
)

export default Searchbar
