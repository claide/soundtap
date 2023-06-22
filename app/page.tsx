'use client';

import { useEffect, useState } from 'react';
import ButtonContainer from './components/buttonContainer';
import { SoundButton } from './types/soundpad.types';
import { Howl, Howler } from 'howler';

export default function Home () {
  const soundButtons: SoundButton[] = [
    {
      name: 'Clapping',
      bg: 'red',
      file: '/media/claps.mp3',
      howl: null
    },
    {
      name: 'Air Horn',
      bg: 'red',
      file: '/media/airhorn.wav',
      howl: null
    },
    {
      name: 'Sad Piano',
      bg: 'red',
      file: '/media/sad-piano.wav',
      howl: null
    },
    {
      name: 'Prank',
      bg: 'red',
      file: '/media/prank.mp3',
      howl: null
    },
    {
      name: 'Fail',
      bg: 'green',
      file: '/media/fail.mp3',
      howl: null
    },
    {
      name: 'Boxing Bell',
      bg: 'green',
      file: '/media/boxing-bell.mp3',
      howl: null
    },
    {
      name: 'Alarm',
      bg: 'green',
      file: '/media/alarm.mp3',
      howl: null
    },
    {
      name: 'Punches & Slap',
      bg: 'green',
      file: '/media/punches-slap.mp3',
      howl: null
    },
    {
      name: 'Dolphin',
      bg: 'blue',
      file: '/media/dolphin.mp3',
      howl: null
    },
    {
      name: 'Anime Wow',
      bg: 'blue',
      file: '/media/anime-wow.mp3',
      howl: null
    }
  ];

  const loadSoundButtons = () => {
    soundButtons.forEach(soundButton => {
      soundButton.howl = new Howl({
        src: soundButton.file,
        preload: true
      });
    });
  };

  const [currentSound, setCurrentSound] = useState<SoundButton | null>(null);

  const handleButtonClick = (soundButton: SoundButton) => {
    if (currentSound && currentSound.name === soundButton.name) {
      if (currentSound.howl) {
        currentSound.howl.stop(); // Stop the currently playing sound
      }
      setCurrentSound(null);
    } else {
      if (currentSound && currentSound.howl) {
        currentSound.howl.stop(); // Stop the previously playing sound
      }
      if (soundButton.howl) {
        soundButton.howl.play(); // Play the clicked sound
      }
      setCurrentSound(soundButton);
    }
  };

  useEffect(() => {
    let audioContext: AudioContext | null = null;

    const handleGesture = () => {
      if (!audioContext) {
        audioContext = new window.AudioContext();
        loadSoundButtons();
      }
    };

    window.addEventListener('click', handleGesture);

    return () => {
      window.removeEventListener('click', handleGesture);
      if (audioContext) {
        audioContext.close();
      }
    };
  });

  return (
    <main className='flex flex-col items-center justify-center p-4'>
      <div className='text-center pb-10'>
        <h1 className='text-2xl leading-relaxed font-bold'>SoundTap</h1>
        <p className='text-lg'>Your online soundpad.</p>
      </div>

      <div className='max-w-2xl w-full mx-auto rounded-lg bg-gray-900 p-6 shadow-device'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {soundButtons.map((soundButton, index) => (
            <ButtonContainer
              key={index}
              soundButton={soundButton}
              onClickCallback={() => handleButtonClick(soundButton)}
              isPlaying={currentSound?.name === soundButton.name}
              className={`min-h-[7rem] bg-gray-600 text-gray-300 text-lg`}
            >
              {soundButton.name}
            </ButtonContainer>
          ))}
        </div>
      </div>
    </main>
  );
}
