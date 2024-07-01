import React, { useState } from 'react';

const Information = () => {
  const [tab, setTab] = useState('transcription');

  console.log(tab);

  return (
    <main className="flex-1 text-center flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center p-4 pb-20 max-w-prose w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
        Your <span className="text-blue-500 bold">Transcription</span>
      </h1>
      <div className="flex mx-auto bg-white border-2 border-solid border-blue-400 shadow rounded-full overflow-hidden items-center">
        <button
          onClick={() => setTab('transcribtion')}
          className={
            'px-4 py-1 duration-200 font-medium ' +
            (tab === 'transcribtion'
              ? 'bg-blue-400 text-white'
              : 'text-blue-400 hover:text-blue-600')
          }
        >
          Transcription
        </button>
        <button
          onClick={() => setTab('translation')}
          className={
            'px-4 duration-200 py-1 font-medium ' +
            (tab === 'translation'
              ? 'bg-blue-400 text-white'
              : 'text-blue-400 hover:text-blue-600')
          }
        >
          Translation
        </button>
      </div>
    </main>
  );
};

export default Information;
