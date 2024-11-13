// =============================================================================
// File Name: Subject Button Component
// File Description:
// This file contains the code of the Subject Button Component, used to select
// the subjet of the quiz.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Image from 'next/image';

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  icon: string;
  text: string;
  action: string;
};
// =============================================================================
// React Components
// =============================================================================
export const SubjectButton = ({ icon, text, action }: Props) => {
  return (
    <a href={action} className=''>
      <Image src={icon} alt='Decoration' />
      {text}
    </a>
  );
};
