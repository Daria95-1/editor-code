export const ResultBlock = ({ result, error }) => {
	return (
		<div className='w-full p-4 border rounded bg-white shadow'>
			{error ? (
				<p className='text-red-500'>{error}</p>
			) : (
				<pre className='text-gray-700 whitespace-pre-wrap'>
					{result}
				</pre>
			)}
		</div>
	)
}
