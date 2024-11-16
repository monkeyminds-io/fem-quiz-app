import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      h1: ['2.5rem', '100%'],
      'h1-lg': ['4rem', '100%'],
      copy: ['0.875rem', '150%'],
      'copy-lg': ['1.25rem', '150%'],
      card: ['1.25rem', '150%'],
      'card-lg': ['1.75rem', '150%']
    },
    extend: {
      width: {
        desktop: '1440px',
      },
      colors: {
        primary: {
          DEFAULT: '#A729F5',
          light: '#D394FA',
        },
        black: '#313E51',
        white: '#FFFFFF',
        gray: {
          800: '#3B4D66',
          600: '#626C7F',
          400: '#ABC1E1',
          200: '#F4F6FA',
        },
        success: '#26D782',
        error: '#EE5454',
        subject: {
          html: '#FFF1E9',
          css: '#E0FDEF',
          js: '#EBF0FF',
          accessibility: '#F6E7FF',
        },
      },
      backgroundImage: {
        'mobile-light':
          "url('../../public/pattern-background-mobile-light.svg')",
        'mobile-dark': "url('../../public/pattern-background-mobile-dark.svg')",
        'tablet-light':
          "url('../../public/pattern-background-tablet-light.svg')",
        'tablet-dark': "url('../../public/pattern-background-tablet-dark.svg')",
        'desktop-light':
          "url('../../public/pattern-background-desktop-light.svg')",
        'desktop-dark':
          "url('../../public/pattern-background-desktop-dark.svg')",
      },
      boxShadow: {
        button: '0px 16px 40px 0px rgba(143, 160, 193, 0.14)',
      },
    },
  },
  plugins: [],
} satisfies Config;
