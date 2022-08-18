import { TableData } from '@/components/index'
import { AppContext } from '@/utils/AppContext'
import { useContext } from 'react'

const TableSection = () => {
	const { myTrainingData } = useContext(AppContext)

	return (
		<section className='sectionContainer'>
			<h1 className='text-base font-bold'>
				My Training Session
				<span className='rounded-full bg-blue-100 text-blue-500 px-1 ml-4 font-normal'>
					{myTrainingData.length}
				</span>
			</h1>

			<TableData data={myTrainingData} />
		</section>
	)
}

export default TableSection
