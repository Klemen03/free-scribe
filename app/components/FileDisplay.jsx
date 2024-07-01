import React from 'react';
import { FaPenNib } from 'react-icons/fa';

const FileDisplay = ({ handleAudioReset, file, audioStream }) => {
  console.log(audioStream);
  return (
    <main className="flex-1 text-center flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center p-4 pb-20 w-fit max-w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your <span className="text-blue-500 bold">File</span>
      </h1>
      <div className=" flex flex-col text-left my-4">
        <h3 className="font-semibold">Name</h3>
        <p>{file ? file?.name : 'Custom file'}</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => handleAudioReset()}
          className="text-slate-400 hover:text-blue-600 duration-200"
        >
          Reset
        </button>
        <button className="specialBtn flex items-center gap-2 px-3 p-2 rounded-lg text-blue-500 font-medium">
          <FaPenNib />
          Transcribe
        </button>
      </div>
    </main>
  );
};

export default FileDisplay;
