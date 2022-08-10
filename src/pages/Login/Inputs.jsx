export const Inputs = ({ register, rememberMe, setRememberMe }) => (
	<>
		<div className='rounded-md shadow-sm space-y-2'>
			<input
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...register('username')}
				name='username'
				required
				type='text'
				className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 placeholder-gray-500 dark:placeholder-gray-400 text-high rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 focus:z-10 sm:text-sm bg-transparent'
				placeholder='Username'
			/>

			<input
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...register('password')}
				name='password'
				type='password'
				required
				className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 placeholder-gray-500 dark:placeholder-gray-400 text-high rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 focus:z-10 sm:text-sm bg-transparent'
				placeholder='Password'
			/>
		</div>
		<div className='form-check relative text-sm mx-1 font-medium text-blue-600 dark:text-blue-500 hover:text-blue-500 cursor-pointer'>
			<input
				className='form-check-input h-4 w-4 border border-gray-300 rounded-full bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
				type='checkbox'
				checked={rememberMe}
				onChange={() => setRememberMe(!rememberMe)}
			/>
			Remember Me
		</div>
	</>
)
