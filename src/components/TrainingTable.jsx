import { Table } from 'antd'
import RatingScore from './RatingScore'

const TrainingTable = ({ data }) => (
	<Table dataSource={data} className='overflow-x-auto rounded-lg'>
		<Table.Column
			title='Event Name'
			dataIndex='name'
			key='name'
			sorter={(a, b) => a.name.length - b.name.length}
			className='text-blue-500 font-medium'
		/>
		<Table.Column
			title='Event Type'
			dataIndex='type'
			key='type'
			sorter={(a, b) => a.type.length - b.type.length}
		/>
		<Table.Column
			title='Event Period'
			dataIndex='period'
			key='period'
			sorter={(a, b) => a.period.length - b.period.length}
		/>
		<Table.Column
			title='Trainer Name'
			dataIndex='trainerName'
			key='trainerName'
			sorter={(a, b) => a.trainerName.length - b.trainerName.length}
		/>
		<Table.Column
			title='Rating'
			dataIndex='rating'
			key='rating'
			render={(rating) => <RatingScore score={rating} />}
			sorter={(a, b) => a.rating - b.rating}
		/>
		<Table.Column
			title='Aditional Info'
			dataIndex='aditionalInfo'
			key='aditionalInfo'
			sorter={(a, b) => a.name.length - b.name.length}
		/>
	</Table>
)

export default TrainingTable
