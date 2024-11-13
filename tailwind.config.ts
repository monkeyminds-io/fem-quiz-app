import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A729F5',
          light: '#D394FA',
          lighter: '#F6E7FF',
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
    },
  },
  plugins: [],
} satisfies Config;
