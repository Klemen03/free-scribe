import React from 'react';
import Logo from './Logo';
import { FaMicrophone } from 'react-icons/fa';

const Main = () => {
  return (
    <main className="flex-1 text-center flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center p-4 pb-20">
      <Logo />
      <h3 className="font-medium text-sm sm:text-lg md:text-xl">
        Record <span className="text-blue-500">&rarr;</span> Transcribe{' '}
        <span className="text-blue-500">&rarr;</span> Translate{' '}
      </h3>
      <button className="specialBtn px-4 py-2 rounded-xl flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4">
        <p className="text-blue-500">Record</p>
        <FaMicrophone />
      </button>
      <p className="text-base">
        Or{' '}
        <label
          htmlFor="uploadfile"
          className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200"
        >
          upload{' '}
          <input
            className="hidden"
            id="uploadfile"
            type="file"
            accept=".mp3, .wave"
          />
        </label>
        a mp3 file
      </p>
      <p className="italic text-base text-slate-500">Free now free forever</p>
    </main>
  );
};

export default Main;
