'use client';
// =============================================================================
// File Name: Header
// File Description:
// This file contains the code of the Header Component
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import sunDark from '../../../public/icon-sun-dark.svg';
import sunLight from '../../../public/icon-sun-light.svg';
import moonDark from '../../../public/icon-moon-dark.svg';
import moonLight from '../../../public/icon-moon-light.svg';
import iconHtml from '../../../public/icon-html.svg';
import iconCss from '../../../public/icon-css.svg';
import iconJavaScript from '../../../public/icon-js.svg';
import iconAccessibility from '../../../public/icon-accessibility.svg';
import { Subject } from '@/libs/models';

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  data?: Subject | undefined;
};
// =============================================================================
// React Components
// =============================================================================
export const Header = ({ data }: Props) => {
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

    // Setting theme based on previous settings
    const hasThemeSettings =
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    hasThemeSettings ? themeToggle?.click() : setLightTheme();
  }, []);

  // Setting Icon
  const icon = () => {
    if (data?.subject === 'html') return iconHtml;
    if (data?.subject === 'css') return iconCss;
    if (data?.subject === 'js') return iconJavaScript;
    if (data?.subject === 'accessibility') return iconAccessibility;
  };

  return (
    <header
      className={clsx(
        'mx-auto flex w-full flex-row items-center px-6 py-4 md:px-16 md:pb-0 md:pt-10 lg:px-40 lg:pt-20',
        data ? 'justify-between' : 'justify-end'
      )}
    >
      {data && (
        <div className='flex flex-row items-center gap-6'>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg bg-subject-${data?.subject}`}
          >
            <Image
              src={icon()}
              alt={'decorative'}
              className='h-7 w-7'
              width={28}
              height={28}
            />
          </div>
          <h1 className='text-xl font-medium'>{data?.title}</h1>
        </div>
      )}
      <div className='flex h-10 flex-row items-center gap-2'>
        <Image
          src={sunIcon}
          alt={'Decoration'}
          className='h-4 w-4 md:h-6 md:w-6'
        />
        <label className='inline-flex cursor-pointer items-center'>
          <input
            id='theme-toggle'
            type='checkbox'
            value='dark-theme'
            className='peer sr-only'
          />
          <div className="peer relative h-5 w-8 rounded-full bg-primary after:absolute after:start-1 after:top-1 after:h-3 after:w-3 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none md:h-7 md:w-12 md:after:h-5 md:after:w-5 rtl:peer-checked:after:-translate-x-full"></div>
        </label>
        <Image
          src={moonIcon}
          alt={'Decortion'}
          className='h-4 w-4 md:h-6 md:w-6'
        />
      </div>
    </header>
  );
};
