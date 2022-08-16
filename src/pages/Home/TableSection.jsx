import { Table } from 'antd'

const data = [
	{
		key: '1',
		name: 'Training Angular',
		type: 'Offline Class',
		period: '9 Jul 2022, 07:00 - 10:00',
		trainerName: 'Juwwita Susati',
		rating: 3,
		aditionalInfo: 'Quis aliqua cupidatat quis ullamco sit ea.',
	},
	{
		key: '2',
		name: 'Seminar QA',
		type: 'Online Class',
		period: '10 Aug 2022, 12:00 - 14:00',
		trainerName: 'Bruce wyne',
		rating: 5,
		aditionalInfo: 'Velit commodo ipsum nostrud nostrud anim minim esse.',
	},
]

const HomeTableSection = () => (
	<>
		<section className='sectionContainer'>
			<h1 className='text-base font-bold'>
				My Training Session
				<span className='rounded-full bg-blue-100 text-blue-500 px-1 ml-4 font-normal'>
					{data.length}
				</span>
			</h1>

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
		</section>
		<style jsx>{`
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

const RatingScore = ({ score }) => {
	const stars = [...Array(5)].map((_, index) => (
		<StarIcon key={index} active={index < score} />
	))

	return stars
}

const StarIcon = ({ active }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={'h-4 w-4' + (active ? ' text-yellow-400' : ' text-gray-400')}
		fill='currentColor'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={1}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
		/>
	</svg>
)

export default HomeTableSection
