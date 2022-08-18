import { Table } from 'antd'
import RatingScore from './RatingScore'

const MyTrainingTable = ({ data }) => (
	<>
		<Table dataSource={data} className='overflow-x-auto rounded-lg'>
			<Table.Column
				title='Event Name'
				dataIndex='name'
				key='name'
				sorter={(a, b) => a.name.length - b.name.length}
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
		<style jsx='true'>{`
			.ant-table-thead > tr > th {
				background-color: #1890ff;
				color: white;
			}
			.ant-table-thead > tr > th:hover {
				background-color: #0780ee !important;
			}
		`}</style>
	</>
)

export default MyTrainingTable
