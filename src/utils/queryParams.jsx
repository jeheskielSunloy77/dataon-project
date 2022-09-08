/* eslint-disable no-prototype-builtins */
const queryPrams = (endpoint, params, pageLimit) => {
	let str = []

	for (let p in params)
		if (params[p] !== '') {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]))
		}

	return `${endpoint}?${str.join('&')}${
		pageLimit ? `&page=1&limit=${pageLimit}` : ''
	}`
}

export default queryPrams
