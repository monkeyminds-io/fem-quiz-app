// =============================================================================
// File Name: Pirmary Button
// File Description:
// This file contains the code for the Primary Button Component.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
// import { ReactNode } from 'react'
import { MouseEventHandler } from 'react';

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  action: MouseEventHandler<HTMLButtonElement>;
};
// =============================================================================
// React Components
// =============================================================================
export const PrimaryButton = ({ type = 'button', text, action }: Props) => {
  return (
    <button
      type={type}
      onClick={action}
      className='mb-2 me-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-light focus:outline-none focus:ring-4 focus:ring-primary'
    >
      {text}
    </button>
  );
};
