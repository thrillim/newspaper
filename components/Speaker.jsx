'use client';
import React, { useEffect, useState } from 'react';
import { HiSpeakerphone } from 'react-icons/hi';

const Speaker = (props) => {
  const [audio, setAudio] = useState('');
  const body = `input=${encodeURIComponent(props.content)}`;

  const fetchAudio = async () => {
    console.log(props.content);
    try {
      const response = await fetch(`http://localhost:3002/tts/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      });
      // console.log(response.json())
      const data = await response.json();
      console.log(data)
      console.log(data.url);
      setAudio(data.url);
    } catch (error) {
      console.error('Error fetching audio:', error);
    }
  };

  return (
    <div>
        <button onClick={fetchAudio}>
          <HiSpeakerphone />
        </button>
        {audio && (
        <audio controls>
          <source src={audio} type="audio/mp3"/>
        </audio>)}
      
    </div>
  );
};

export default Speaker;
