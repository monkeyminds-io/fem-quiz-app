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
      <Header />

      {/* Main */}
      <main className='flex flex-col gap-10 mx-auto px-6 py-8 w-full max-w-desktop md:gap-16 md:px-16 lg:flex-row lg:px-40 lg:py-20'>
        {/* Quiz menu start */}
        <div className='flex flex-col gap-4 w-full'>
          <h1 className='w-full max-w-[283px] text-h1 font-light md:text-h1-lg md:max-w-[453px]'>
            Welcome to the <span className='font-bold'>Frontend Quiz!</span>
          </h1>
          <p className='text-copy italic md:text-copy-lg'>
            Pick a subject to get started.
          </p>
        </div>
        <div className='flex flex-col gap-3 w-full'>
          <SubjectButton
            subject={'html'}
            icon={iconHtml}
            text={'HTML'}
            action={'#'}
          />
          <SubjectButton
            subject={'css'}
            icon={iconCss}
            text={'CSS'}
            action={'#'}
          />
          <SubjectButton
            subject={'js'}
            icon={iconJs}
            text={'JavaScript'}
            action={'#'}
          />
          <SubjectButton
            subject={'accessibility'}
            icon={iconAccessibility}
            text={'Accessibility'}
            action={'#'}
          />
        </div>
        {/* Quiz menu end */}
      </main>
    </div>
  );
}
