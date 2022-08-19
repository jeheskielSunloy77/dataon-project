/* eslint-disable react/jsx-props-no-spreading */
import { Spin } from 'antd'
import { lazy, Suspense } from 'react'

const Icon = (props) => {
	const SVG = lazy(() => import(`./iconsSvg/${props.name}.jsx`))

	return (
		<Suspense fallback={<Spin spinning />}>
			<SVG {...props} />
		</Suspense>
	)
}

export default Icon
