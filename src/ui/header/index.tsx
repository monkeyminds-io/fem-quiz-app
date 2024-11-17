'use client';
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
import sunLight from '../../../public/icon-sun-light.svg';
import moonDark from '../../../public/icon-moon-dark.svg';
import moonLight from '../../../public/icon-moon-light.svg';
import { useEffect, useState } from 'react';

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  hasTitle?: boolean;
  subject?: string;
  titleIcon?: string | undefined;
};
// =============================================================================
// React Components
// =============================================================================
export const Header = ({
  hasTitle = false,
  subject = '',
  titleIcon = '',
}: Props) => {
  // Dark Mode setting
  const [sunIcon, setSunIcon] = useState(sunDark);
  const [moonIcon, setMoonIcon] = useState(moonDark);

  const setDarkTheme = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
    setSunIcon(sunLight);
    setMoonIcon(moonLight);
  };

  const setLightTheme = () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
    setSunIcon(sunDark);
    setMoonIcon(moonDark);
  };

  useEffect(() => {
    // Setting theme based on previous settings
    const hasThemeSettings =
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    hasThemeSettings ? setDarkTheme() : setLightTheme();

    // Set click event on Theme Toggle
    const themeToggle: HTMLElement | null =
      document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.onclick = () => {
        const theme = localStorage.getItem('color-theme');
        if (theme) theme === 'light' ? setDarkTheme() : setLightTheme();
        else
          document.documentElement.classList.contains('dark')
            ? setLightTheme()
            : setDarkTheme();
      };
    }
  }, []);

  return (
    <header
      className={clsx(
        'mx-auto flex w-full flex-row items-center px-6 py-4 md:px-16 md:pb-0 md:pt-10 lg:px-40 lg:pt-20',
        hasTitle ? 'justify-between' : 'justify-end'
      )}
    >
      {hasTitle && (
        <div className='flex flex-row items-center gap-6'>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg bg-subject-${subject}`}
          >
            <Image src={titleIcon} alt={'decorative'} className='h-7 w-7' />
          </div>
          <h1 className='text-xl font-medium'>Accessibility</h1>
        </div>
      )}
      <div className='flex h-10 flex-row items-center gap-2'>
        <Image src={sunIcon} alt={'Decoration'} className='w-4 h-4 md:w-6 md:h-6'/>
        <label className='inline-flex cursor-pointer items-center'>
          <input
            id='theme-toggle'
            type='checkbox'
            value='dark-theme'
            className='peer sr-only'
          />
          <div className="peer relative h-5 w-8 rounded-full bg-primary after:absolute after:start-1 after:top-1 after:h-3 after:w-3 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none rtl:peer-checked:after:-translate-x-full md:w-12 md:h-7 md:after:w-5 md:after:h-5"></div>
        </label>
        <Image src={moonIcon} alt={'Decortion'} className='w-4 h-4 md:w-6 md:h-6'/>
      </div>
    </header>
  );
};
