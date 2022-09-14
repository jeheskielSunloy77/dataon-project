import { Breadcrumb } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import BreadcrumbItems from './BreadcrumbItems'

const BreadCrumb = () => {
	const { t } = useTranslation()

	return (
		<Breadcrumb className='centerAll' separator='>'>
			<Breadcrumb.Item>
				<Link data-testid='homeLink' to='/'>
					{t('Home')}
				</Link>
			</Breadcrumb.Item>
			<BreadcrumbItems />
		</Breadcrumb>
	)
}

export default BreadCrumb
