export const matchMediaConfig = () => {
	window.matchMedia =
		window.matchMedia ||
		function () {
			return {
				matches: false,
				addListener: function () {},
				removeListener: function () {},
			}
		}
}

export const setupUser = () => {
	const userToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwicGFzc3dvcmQiOiJ1c2VyMSIsInJvbGUiOiJ1c2VyIiwidXNlcklkIjoidXNlcjEifQ.45wbJXI7KbOccfOV3uitb3QHgnhAzHJKolVEu8r1YbQ'

	localStorage.setItem('token', userToken)
}

export const setupAdmin = () => {
	const adminToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6ImFkbWluMSJ9.yUcuY_S9IC-XT3MyEsmGMUaQfcKYaAR8EXIMWKTA2ys'

	localStorage.setItem('token', adminToken)
}
