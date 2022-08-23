import { notification } from 'antd'

const Notification = (message, desc, type) => {
	notification[type]({
		message: message,
		description: desc,
	})
}

export default Notification
