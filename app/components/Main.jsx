import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { FaMicrophone } from 'react-icons/fa';

const Main = ({ setFile, setAudioStrem }) => {
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [audioChunks, setAudioChunks] = useState([]);
  const [duration, setDuration] = useState(0);

  const mediaRecorder = useRef(null);

  const mimeType = 'audio/webm';

  const startRecording = async () => {
    let tempStream;
    console.log('Start recording');
    try {
      const streamData = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      tempStream = streamData;
    } catch (err) {
      console.log('Error getting user media:', err.message);
      setRecordingStatus('error');
      return;
    }

    setRecordingStatus('recording');

    //create new Media recorder instance using the strem
    const media = new MediaRecorder(tempStream, { type: mimeType });
    mediaRecorder.current = media;

    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === 'undefined') {
        return;
      }
      if (event.data.size === 0) {
        return;
      }
      localAudioChunks.push(event.data);
    };

    setAudioChunks(localAudioChunks);
  };

  //   const stopRecording = async () => {
  //     setRecordingStatus('inactive');
  //     console.log('Stop Recording');

  //     mediaRecorder.current.stop();
  //     mediaRecorder.current.onstop = () => {
  //       const audioBlob = new Blob(audioChunks, { type: mimeType });
  //       setAudioStrem(audioBlob);
  //       setAudioChunks([]);
  //       setDuration(0);
  //     };
  //   };

  const stopRecording = async () => {
    try {
      if (mediaRecorder.current) {
        setRecordingStatus('inactive');
        console.log('Stop Recording');
        mediaRecorder.current.stop();
      } else {
        console.error('mediaRecorder.current is null or undefined.');
      }
    } catch (error) {
      console.error('Error in stopRecording:', error);
    }
  };

  useEffect(() => {
    if (recordingStatus === 'inactive') return;

    const interval = setInterval(() => {
      setDuration((curr) => curr + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <main className="flex-1 text-center flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center p-4 pb-20">
      <Logo />
      <h3 className="font-medium text-sm sm:text-lg md:text-xl">
        Record <span className="text-blue-500">&rarr;</span> Transcribe{' '}
        <span className="text-blue-500">&rarr;</span> Translate{' '}
      </h3>
      <button
        className="specialBtn px-4 py-2 rounded-xl flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4"
        onClick={
          recordingStatus === 'recording' ? stopRecording : startRecording
        }
      >
        <p className="text-blue-500">
          {recordingStatus === 'inactive' ? 'Record' : `Stop Recording`}
        </p>
        <div className="flex items-center gap-2">
          {duration && <p className="text-sm">{duration}s</p>}
          <FaMicrophone
            className={recordingStatus === 'recording' ? 'text-rose-300' : ''}
          />
        </div>
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
            accept=".mp3, .wave, .png"
            onChange={(e) => {
              const tempFile = e.target.files[0];
              setFile(tempFile);
            }}
          />
        </label>
        a mp3 file
      </p>
      <p className="italic text-base text-slate-400">Free now free forever</p>
    </main>
  );
};

export default Main;
