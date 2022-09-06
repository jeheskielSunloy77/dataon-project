import jwt_decode from 'jwt-decode'
import moment from 'moment'
import { useContext } from 'react'
import { AppContext } from './AppContext'

const queryPrams = (pageLimit) => {
	const { searchParams } = useContext(AppContext)
	const token = localStorage.getItem('token')
	const { userId } = jwt_decode(token)
	const date = moment(new Date()).format()

	const url = `trainings?${
		searchParams.eventName !== '' ? searchParams.eventName + '&' : ''
	}${searchParams.eventType !== '' ? searchParams.eventType + '&' : ''}${
		searchParams.eventStatus === true ? `startDate=${date}&` : ''
	}${pageLimit ? `page=1&limit=${pageLimit}` : `userId=${userId}`}`

	return url
}

export default queryPrams
