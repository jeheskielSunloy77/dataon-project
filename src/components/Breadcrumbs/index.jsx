import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import BreadcrumbItems from './BreadcrumbItems'

const BreadCrumb = () => (
	<>
		<Breadcrumb className='centerAll' separator='>'>
			<Breadcrumb.Item>
				<Link data-testid='homeLink' to='/'>
					Home
				</Link>
			</Breadcrumb.Item>
			<BreadcrumbItems />
		</Breadcrumb>
	</>
)

export default BreadCrumb
