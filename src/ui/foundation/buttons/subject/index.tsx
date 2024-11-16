// =============================================================================
// File Name: Subject Button Component
// File Description:
// This file contains the code of the Subject Button Component, used to select
// the subjet of the quiz.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import clsx from 'clsx';
import Image from 'next/image';

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  subject: string;
  icon: string;
  text: string;
  action: string;
};
// =============================================================================
// React Components
// =============================================================================
export const SubjectButton = ({ subject, icon, text, action }: Props) => {
  return (
    <a
      href={action}
      className='flex flex-row items-center gap-4 rounded-xl bg-white p-3 text-card font-medium shadow-button transition-all duration-300 ease-in-out hover:ring-4 hover:ring-primary md:text-card-lg dark:bg-gray-800'
    >
      <div
        className={clsx(
          'flex h-10 w-10 items-center justify-center rounded-lg',
          subject === 'html' ? 'bg-subject-html' : '',
          subject === 'css' ? 'bg-subject-css' : '',
          subject === 'js' ? 'bg-subject-js' : '',
          subject === 'accessibility' ? 'bg-subject-accessibility' : ''
        )}
      >
        <Image src={icon} alt={'decorative'} className='h-7 w-7' />
      </div>
      {text}
    </a>
  );
};
