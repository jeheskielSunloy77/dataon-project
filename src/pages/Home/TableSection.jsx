import { TableData } from '@/components/index'

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

const TableSection = () => (
	<section className='sectionContainer'>
		<h1 className='text-base font-bold'>
			My Training Session
			<span className='rounded-full bg-blue-100 text-blue-500 px-1 ml-4 font-normal'>
				{data.length}
			</span>
		</h1>

		<TableData data={data} />
	</section>
)

export default TableSection
