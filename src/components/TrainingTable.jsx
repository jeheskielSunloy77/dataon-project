import { Spin, Table } from 'antd'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import RatingScore from './RatingScore'

const TrainingTable = ({ data, infiniteScroll }) => {
	const [tableData, setTableData] = useState(data.slice(0, 10))

	const Wrapper = ({ children }) => {
		const fetchMoreData = () => {
			if (tableData.length >= data.length) {
				return false
			} else
				setTimeout(() => {
					setTableData((prev) =>
						prev.concat(data.slice(prev.length, prev.length + 10))
					)
				}, 1000)
		}

		if (infiniteScroll)
			return (
				<InfiniteScroll
					dataLength={tableData.length}
					next={fetchMoreData}
					hasMore={tableData.length < data.length}
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
				dataSource={infiniteScroll ? tableData : data}
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
		</Wrapper>
	)
}

export default TrainingTable
