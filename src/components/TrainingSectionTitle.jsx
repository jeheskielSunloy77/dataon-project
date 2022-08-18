const TrainingSectionTitle = ({ text, dataLength }) => (
	<h1 className='text-base font-bold'>
		{text}
		<span className='rounded-full bg-blue-100 text-blue-500 px-1 ml-4 font-normal'>
			{dataLength}
		</span>
	</h1>
)

export default TrainingSectionTitle
