export const CodeEditor = ({ code, setCode }) => {
	return (
		<textarea
			value={code}
			onChange={(e) => setCode(e.target.value)}
			className='w-full h-64 p-4 border border-gray-300 rounded-md'
			placeholder='Enter code...'
		/>
	)
}
