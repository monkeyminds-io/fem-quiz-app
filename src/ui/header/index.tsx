// =============================================================================
// File Name: Header
// File Description:
// This file contains the code of the Header Component
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import clsx from 'clsx';
import Image from 'next/image';
import sunDark from '../../../public/icon-sun-dark.svg';
import moonDark from '../../../public/icon-moon-dark.svg';
// import iconHtml from "../../../public/icon-html.svg"
// import iconCss from "../../../public/icon-css.svg"
// import iconJs from "../../../public/icon-js.svg"
import iconAccessibility from '../../../public/icon-accessibility.svg';

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  hasTitle: boolean;
};
// =============================================================================
// React Components
// =============================================================================
export const Header = ({ hasTitle = false }: Props) => {
  return (
    <header
      className={clsx(
        'flex flex-row items-center px-6 py-4',
        hasTitle ? 'justify-between' : 'justify-end'
      )}
    >
      <div
        className={clsx(
          hasTitle ? 'flex flex-row items-center gap-6' : 'hidden'
        )}
      >
        <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary-lighter'>
          <Image
            src={iconAccessibility}
            alt={'decorative'}
            className='w-7 h-7'
          />
        </div>
        <h1 className='text-xl font-medium'>Accessibility</h1>
      </div>
      <div className='flex h-10 flex-row gap-2'>
        <Image src={sunDark} alt={'Decoration'} />
        <label className='inline-flex cursor-pointer items-center'>
          <input type='checkbox' value='dark-theme' className='peer sr-only' />
          <div className="peer relative h-5 w-8 rounded-full bg-primary after:absolute after:start-1 after:top-1 after:h-3 after:w-3 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"></div>
        </label>
        <Image src={moonDark} alt={'Decortion'} />
      </div>
    </header>
  );
};
