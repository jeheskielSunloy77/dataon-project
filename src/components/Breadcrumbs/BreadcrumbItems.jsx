import customAxios from '@/utils/axios'
import { Breadcrumb } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

const BreadcrumbItems = () => {
	const [eventName, setEventName] = useState('')
	const { pathname } = useLocation()
	const { t } = useTranslation()
	const pathnames = pathname.split('/').filter((item) => item)
	const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1)

	useEffect(() => {
		const fetchData = async () => {
			const response = await customAxios(
				`trainings/${pathnames[pathnames.length - 1]}`
			)
			setEventName(response.data.data.name)
		}
		fetchData()
	}, [])

	return pathnames.map((name, index) => {
		const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
		const routeName = capatilize(name.split('-').join(' '))

		return (
			<Breadcrumb.Item key={index}>
				<Link data-testid='itemsLink' to={`${routeTo}`}>
					{index === pathnames.length - 1
						? capatilize(eventName)
						: capatilize(t(routeName))}
				</Link>
			</Breadcrumb.Item>
		)
	})
}

export default BreadcrumbItems
