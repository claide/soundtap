import React from 'react';
import { ButtonProps } from '../types/button.types';
import { SoundButton } from '../types/soundpad.types';

interface ButtonWithSoundProps extends ButtonProps {
  soundButton: SoundButton;
  onClickCallback?: () => void;
}

const ButtonWithSound: React.FC<ButtonWithSoundProps> = ({
  onClickCallback,
  onClick,
  className,
  children,
  soundButton
}) => {
  const handleClick = () => {
    if (onClickCallback) {
      onClickCallback(); // Execute the callback function if it is provided
    }
  };

  return (
    <button
      className={`p-4 rounded-md shadow font-medium ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ButtonWithSound;
