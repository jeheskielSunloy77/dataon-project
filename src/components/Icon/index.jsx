/* eslint-disable react/jsx-props-no-spreading */
import { lazy, Suspense } from 'react'

const Icon = (props) => {
	const SVG = lazy(() => import(`./iconsSvg/${props.name}.jsx`))

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SVG {...props} />
		</Suspense>
	)
}

export default Icon
