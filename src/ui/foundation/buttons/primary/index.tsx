// =============================================================================
// File Name: Primary Button
// File Description:
// This file contains the code for the Primary Button Component.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================

import { MouseEventHandler } from 'react';

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  text: string;
  handleClick: Function;
};
// =============================================================================
// React Components
// =============================================================================
export const PrimaryButton = ({ text, handleClick }: Props) => {
  return (
    <button
      type='button'
      onClick={(e) => handleClick(e)}
      className='text-sm h-14 rounded-xl bg-primary px-5 py-2.5 font-medium text-white transition-colors duration-300 ease-in-out hover:bg-primary-light focus:outline-none focus:ring-4 focus:ring-primary-light'
    >
      {text}
    </button>
  );
};
