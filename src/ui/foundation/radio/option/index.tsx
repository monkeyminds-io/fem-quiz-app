// =============================================================================
// File Name: Radio Option Component
// File Description:
// This file contains the Radio Option Component
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import iconCorrect from '../../../../../public/icon-correct.svg';
import iconIncorrect from '../../../../../public/icon-incorrect.svg';

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  index: number | string;
  icon: string;
  option: string | undefined;
  isCorrect: boolean;
  isSubmitted: boolean;
};
// =============================================================================
// React Components
// =============================================================================
export const Option = ({
  index,
  icon,
  option,
  isCorrect,
  isSubmitted,
}: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    const option = document?.getElementById(
      `option-${index}`
    ) as HTMLInputElement;
    setIsChecked(option.checked);
  };

  useEffect(() => {
    setIsChecked(isSubmitted && isChecked);
  }, [isSubmitted]);

  // TODO Responsiveness
  // TODO Dark mode
  return (
    <label
      htmlFor={`option-${index}`}
      className={clsx(
        'group flex w-full cursor-pointer items-center gap-4 rounded-xl bg-white p-3 shadow-button',
        'has-[:checked]:ring-2',
        'dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
        isSubmitted ? 'pointer-events-none' : '',
        isChecked && isCorrect && isSubmitted
          ? 'has-[:checked]:ring-success'
          : 'has-[:checked]:ring-primary',
        isChecked && !isCorrect && isSubmitted
          ? 'has-[:checked]:ring-error'
          : 'has-[:checked]:ring-primary'
      )}
    >
      <input
        type='radio'
        id={`option-${index}`}
        name='option'
        value={option}
        className='peer sr-only hidden'
        onClick={handleClick}
      />
      <div
        className={clsx(
          'flex h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-gray-200 text-copy-large font-medium text-gray-800',
          'transition-colors duration-300 ease-in-out group-hover:bg-primary-lighter group-hover:text-primary',
          'peer-checked:text-white',
          'md:text-copy-large-lg',
          isChecked && isCorrect && isSubmitted
            ? 'peer-checked:bg-success'
            : 'peer-checked:bg-primary',
          isChecked && !isCorrect && isSubmitted
            ? 'peer-checked:bg-error'
            : 'peer-checked:bg-primary'
        )}
      >
        {icon}
      </div>
      <div className='flex w-full flex-row items-center justify-between font-medium'>
        {option}
        {isCorrect && isSubmitted && (
          <Image src={iconCorrect} alt='decoration' className='h-8 w-8' />
        )}
        {isChecked && !isCorrect && isSubmitted && (
          <Image src={iconIncorrect} alt='decoration' className='h-8 w-8' />
        )}
      </div>
    </label>
  );
};
