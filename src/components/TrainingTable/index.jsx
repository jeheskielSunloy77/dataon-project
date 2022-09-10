import { Spin, Table } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import RatingScore from '../RatingScore'

const TrainingTable = ({
	tableData,
	setPageLimit,
	infiniteScroll,
	dataLength,
}) => (
	<Wrapper
		tableData={tableData}
		setPageLimit={setPageLimit}
		infiniteScroll={infiniteScroll}
		dataLength={dataLength}
	>
		<Table
			loading={!tableData}
			dataSource={tableData}
			pagination={!infiniteScroll}
			className='overflow-x-auto rounded-lg'
		>
			<Table.Column
				title='Event Name'
				dataIndex='name'
				key='name'
				render={(text, { id }) => (
					<Link to={`/detailTraining/${id}`} className='text-blue-500 font-medium'>
						{text}
					</Link>
				)}
				sorter={(a, b) => a.name.length - b.name.length}
			/>
			<Table.Column
				title='Event Type'
				dataIndex='isOnline'
				key='isOnline'
				render={(isOnline) => (isOnline ? 'Online Class' : 'Offline Class')}
				sorter={(a, b) => a.isOnline - b.isOnline}
			/>
			<Table.Column
				title='Event Period'
				dataIndex='period'
				key='period'
				sorter={(a, b) => Date.parse(a.startDate) - Date.parse(b.startDate)}
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
				render={(_, { id }) => <RatingScore id={id} />}
			/>
			<Table.Column
				title='Aditional Info'
				dataIndex='information'
				className='max-w-xs'
				key='information'
				sorter={(a, b) => a.information.length - b.information.length}
			/>
		</Table>
	</Wrapper>
)

const Wrapper = ({
	children,
	infiniteScroll,
	tableData,
	setPageLimit,
	dataLength,
}) => {
	const fetchMoreData = () => {
		if (tableData.length >= dataLength) return false
		else setPageLimit((prev) => prev + 5)
	}

	if (infiniteScroll)
		return (
			<InfiniteScroll
				dataLength={tableData?.length || 0}
				next={fetchMoreData}
				hasMore={tableData?.length < dataLength}
				loader={
					<Spin className='absolute bottom-0 left-1/2 -translate-x-1/2' spinning />
				}
				className='relative'
			>
				{children}
			</InfiniteScroll>
		)
	else return children
}

export default TrainingTable
