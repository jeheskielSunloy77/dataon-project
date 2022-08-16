import { Breadcrumb } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const BreadcrumbItems = () => {
	const { pathname } = useLocation()
	const pathnames = pathname.split('/').filter((item) => item)
	const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1)

	return pathnames.map((name, index) => {
		const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`

		return (
			<Breadcrumb.Item key={index}>
				<Link data-testid='itemsLink' to={`${routeTo}`}>
					{capatilize(name)}
				</Link>
			</Breadcrumb.Item>
		)
	})
}

export default BreadcrumbItems
