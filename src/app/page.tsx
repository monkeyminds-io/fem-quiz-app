// =============================================================================
// File Name: Home Page
// File Description:
// this file contains the code of the Home Page.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { SubjectButton } from '@/ui/foundation/buttons/subject';
import iconHtml from '../../public/icon-html.svg';
import iconCss from '../../public/icon-css.svg';
import iconJs from '../../public/icon-js.svg';
import iconAccessibility from '../../public/icon-accessibility.svg';
import { Header } from '@/ui/header';

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Component
// =============================================================================
export default function HomePage() {
  return (
    <div className=''>
      {/* TODO Create Header Component */}
      <Header hasTitle={true} />

      {/* Main */}
      <main>
        {/* Quiz menu start */}
        Welcome to the Frontend Quiz! Pick a subject to get started.
        <SubjectButton icon={iconHtml} text={'HTML'} action={'#'} />
        <SubjectButton icon={iconCss} text={'CSS'} action={'#'} />
        <SubjectButton icon={iconJs} text={'JavaScript'} action={'#'} />
        <SubjectButton
          icon={iconAccessibility}
          text={'Accessibility'}
          action={'#'}
        />
        {/* Quiz menu end */}
      </main>
    </div>
  );
}
