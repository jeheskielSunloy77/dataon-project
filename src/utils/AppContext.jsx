import { createContext, useState } from 'react'

const data1 = [
	{
		image:
			'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
		name: 'Training Angular',
		location: 'Jln. Terserah, Jakarta, Id',
		type: 'Offline Class',
		period: '9 Jul 2022, 07:00 - 10:00',
		trainerName: 'Juwwita Susati',
		rating: 3,
		aditionalInfo: 'Quis aliqua cupidatat quis ullamco sit ea.',
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
		name: 'Learn ReactJS',
		type: 'Online Class',
		period: '10 Aug 2022, 12:00 - 14:00',
		trainerName: 'Bruce wyne',
		rating: 5,
		aditionalInfo: 'Velit commodo ipsum nostrud nostrud anim minim esse.',
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
		name: 'Training Golang',
		type: 'Online Class',
		period: '11 Dec 2022, 12:00 - 14:00',
		trainerName: 'Bruce wyne',
		rating: 2,
		aditionalInfo: 'Ad irure non ex do Exercitation dolore qui elit.',
	},
	{
		image:
			'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
		name: 'Learn Typescript',
		location: 'Jln. Terserah, Jakarta, Id',
		type: 'Offline Class',
		period: '11 Jan 2022, 07:00 - 12:00',
		trainerName: 'Johnny Depp',
		rating: 4,
		aditionalInfo: 'Exercitation nostrud irure consectetur duis.',
	},
]

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [myTrainingData, setMyTrainingData] = useState(data1)
	const [myTrainingView, setMyTrainingView] = useState('table')

	return (
		<AppContext.Provider
			value={{
				myTrainingData,
				setMyTrainingData,
				myTrainingView,
				setMyTrainingView,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
