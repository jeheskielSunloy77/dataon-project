/* eslint-disable no-prototype-builtins */
const queryPrams = (endpoint, params) => {
	let str = []

	for (let p in params)
		if (params[p] !== '') {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]))
		}

	return `${endpoint}?${str.join('&')}`
}

export default queryPrams
