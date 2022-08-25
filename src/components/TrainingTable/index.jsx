import { Spin, Table } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { RatingScore } from '../index'

const TrainingTable = ({ tableData, setPageLimit, infiniteScroll }) => {
	const Wrapper = ({ children }) => {
		const fetchMoreData = () => {
			if (tableData.length >= 9) {
				return false
			} else setPageLimit((prev) => prev + 5)
		}

		if (infiniteScroll)
			return (
				<InfiniteScroll
					dataLength={tableData.length}
					next={fetchMoreData}
					hasMore={tableData.length < 9}
					loader={
						<Spin className='absolute bottom-0 left-1/2 -translate-x-1/2' spinning />
					}
					endMessage={<h1 className='text-center'>That is all</h1>}
					className='relative'
				>
					{children}
				</InfiniteScroll>
			)
		else return children
	}

	return (
		<Wrapper>
			<Table
				dataSource={tableData}
				pagination={!infiniteScroll}
				className='overflow-x-auto rounded-lg'
			>
				<Table.Column
					title='Event Name'
					dataIndex='name'
					key='name'
					sorter={(a, b) => a.name.length - b.name.length}
					className='text-blue-500 font-medium'
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
					render={(rating) => <RatingScore score={rating} />}
					sorter={(a, b) => a.rating - b.rating}
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
}

export default TrainingTable
