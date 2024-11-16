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
      className={clsx('flex flex-row items-center gap-4 rounded-xl bg-white p-3 shadow-button transition-colors duration-300 ease-in-out text-card md:text-card-lg font-medium',
        subject === 'html' ? 'hover:bg-subject-html' : '',
        subject === 'css' ? 'hover:bg-subject-css' : '',
          subject === 'js' ? 'hover:bg-subject-js' : '',
          subject === 'accessibility' ? 'hover:bg-subject-accessibility' : ''
      )}
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
