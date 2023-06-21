import React, { useRef } from 'react';
import ButtonWithSound from './button';
import { ButtonProps } from '../types/button.types';
import { SoundButton } from '../types/soundpad.types';

interface ButtonContainerProps extends ButtonProps {
  soundButton: SoundButton;
  onClickCallback?: () => void;
  isPlaying: boolean;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  onClickCallback,
  className,
  children,
  isPlaying,
  soundButton
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    // onClickCallback();
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  return (
    <>
      <ButtonWithSound
        onClickCallback={handleClick}
        className={className}
        soundButton={soundButton}
      >
        {children}
      </ButtonWithSound>
      <audio ref={audioRef} src={soundButton.file}></audio>
    </>
  );
};

export default ButtonContainer;
