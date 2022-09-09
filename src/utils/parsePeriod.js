import moment from 'moment'

const parsePeriod = (startDate, endDate) => {
	const parsedStart = moment(startDate).format('ll-HH-mm')
	const parsedEnd = moment(endDate).format('HH-mm')

	return `${parsedStart} - ${parsedEnd}`
}

export default parsePeriod
