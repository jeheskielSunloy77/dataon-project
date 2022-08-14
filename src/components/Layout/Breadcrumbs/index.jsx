import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { BreadcrumbItems } from './BreadcrumbItems'

const BreadCrumb = () => (
	<Breadcrumb className='container mx-auto px-6 pt-4'>
		<Breadcrumb.Item>
			<Link to='/'>Home</Link>
		</Breadcrumb.Item>
		<BreadcrumbItems />
	</Breadcrumb>
)

export default BreadCrumb
