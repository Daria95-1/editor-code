export const LanguageSelector = ({ language, setLanguage }) => {
	return (
		<select
			value={language}
			onChange={(e) => setLanguage(e.target.value)}
			className='w-full p-2 border rounded bg-white shadow'
		>
			<option value='javascript'>JavaScript</option>
			<option value='python'>Python</option>
		</select>
	)
}
