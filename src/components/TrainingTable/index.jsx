import { AppContext } from '@/utils/AppContext'
import { Skeleton, Table } from 'antd'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import RatingScore from '../RatingScore'

const TrainingTable = ({
	tableData,
	setPageLimit,
	infiniteScroll,
	dataLength,
	filteredDataLength,
}) => {
	const { t } = useTranslation()

	return (
		<Wrapper
			tableData={tableData}
			setPageLimit={setPageLimit}
			infiniteScroll={infiniteScroll}
			dataLength={dataLength}
			filteredDataLength={filteredDataLength}
		>
			<Table
				dataSource={tableData}
				pagination={!infiniteScroll}
				className='overflow-x-auto rounded-lg'
			>
				<Table.Column
					title='No'
					key='no'
					render={(text, record, index) => index + 1}
				/>
				<Table.Column
					title={t('Event Name')}
					dataIndex='name'
					key='name'
					render={(text, { id }) => (
						<Link
							to={`/detail-training/${id}`}
							className='text-blue-500 font-medium capitalize'
						>
							{text}
						</Link>
					)}
					sorter={(a, b) => a.name.length - b.name.length}
				/>
				<Table.Column
					title={t('Event Type')}
					dataIndex='isOnline'
					key='isOnline'
					render={(isOnline) => (isOnline ? t('Online Class') : t('Offline Class'))}
					sorter={(a, b) => a.isOnline - b.isOnline}
				/>
				<Table.Column
					title={t('Event Period')}
					dataIndex='period'
					key='period'
					sorter={(a, b) => Date.parse(a.startDate) - Date.parse(b.startDate)}
				/>
				<Table.Column
					title={t('Trainer Name')}
					dataIndex='trainer'
					key='trainer'
					sorter={(a, b) => a.trainer.length - b.trainer.length}
				/>
				<Table.Column
					title={t('Rating')}
					dataIndex='rating'
					key='rating'
					render={(_, { id, rating }) => <RatingScore rating={rating} id={id} />}
				/>
				<Table.Column
					title={t('Aditional Info')}
					dataIndex='information'
					className='max-w-xs'
					key='information'
					sorter={(a, b) => a.information.length - b.information.length}
				/>
			</Table>
		</Wrapper>
	)
}

const Wrapper = ({
	children,
	infiniteScroll,
	tableData,
	setPageLimit,
	dataLength,
	filteredDataLength,
}) => {
	const { isSearched } = useContext(AppContext)
	const { t } = useTranslation()

	const fetchMoreData = () => {
		if (tableData.length >= dataLength) return false
		else setPageLimit((prev) => prev + 10)
	}

	if (infiniteScroll)
		return (
			<InfiniteScroll
				dataLength={tableData?.length || 0}
				next={fetchMoreData}
				hasMore={
					isSearched
						? tableData.length + (filteredDataLength - tableData.length) !==
						dataLength
						: tableData?.length < dataLength
				}
				loader={
					<div className='grid grid-cols-6 gap-6'>
						<Skeleton title paragraph={false} active />
						<Skeleton title paragraph={false} active />
						<Skeleton title paragraph={false} active />
						<Skeleton title paragraph={false} active />
						<Skeleton title paragraph={false} active />
						<Skeleton title paragraph={false} active />
					</div>
				}
				endMessage={
					<h1 className='col-span-full mx-auto text-accent text-center my-3'>
						{t('Your All Cought Up!')}
					</h1>
				}
				className='relative'
			>
				{children}
			</InfiniteScroll>
		)
	else return children
}

export default TrainingTable
