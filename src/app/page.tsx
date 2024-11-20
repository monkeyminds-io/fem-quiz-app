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
// Page Component
// =============================================================================
export default function HomePage() {
  return (
    <main className='max-w-desktop mx-auto flex w-full flex-col gap-10 px-6 py-8 md:gap-16 md:px-16 lg:flex-row lg:px-40 lg:py-20'>
      {/* Quiz menu start */}
      <div className='flex w-full flex-col gap-4'>
        <h1 className='w-full max-w-[283px] text-h1 font-light md:max-w-[453px] md:text-h1-lg'>
          Welcome to the <span className='font-bold'>Frontend Quiz!</span>
        </h1>
        <p className='text-copy italic md:text-copy-lg'>
          Pick a subject to get started.
        </p>
      </div>
      <div className='flex w-full flex-col gap-3'>
        <SubjectButton
          subject={'html'}
          icon={iconHtml}
          text={'HTML'}
          action={'/quiz?subject=html'}
        />
        <SubjectButton
          subject={'css'}
          icon={iconCss}
          text={'CSS'}
          action={'/quiz?subject=css'}
        />
        <SubjectButton
          subject={'js'}
          icon={iconJs}
          text={'JavaScript'}
          action={'/quiz?subject=js'}
        />
        <SubjectButton
          subject={'accessibility'}
          icon={iconAccessibility}
          text={'Accessibility'}
          action={'/quiz?subject=accessibility'}
        />
      </div>
      {/* Quiz menu end */}
    </main>
  );
}
