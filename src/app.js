import { useState } from 'react';
import { CodeEditor, LanguageSelector, ResultBlock } from './components';

export const App = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleRunCode = async () => {
    try {
      setError(null);
      const response = await fetch('/api/run-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      setError('Error executing code')
    }
  };

  return (
		<div className='min-h-screen flex flex-col items-center bg-gray-50 p-4'>
			<header className='text-center mb-4'>
				<h1 className='text-2xl font-bold text-gray-700'>
					Сode editor
				</h1>
			</header>

			<main className='w-full max-w-4xl flex flex-col space-y-4'>
				<CodeEditor code={code} setCode={setCode} language={language} />
				<LanguageSelector
					language={language}
					setLanguage={setLanguage}
				/>
				<button
					onClick={handleRunCode}
					className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow'
				>
					Run
				</button>
				{result !== null || error !== null ? (
					<ResultBlock result={result} error={error} />
				) : null}
			</main>
		</div>
  )
};
