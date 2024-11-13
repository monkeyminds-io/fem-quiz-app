// =============================================================================
// File Name: Main Lyout
// File Description:
// This file contains the code of the Main Layout of the application.
// =============================================================================
// =============================================================================
// Layout Imports
// =============================================================================
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// =============================================================================
// Local Fonts
// =============================================================================
// const rubikItalic = localFont({
//   src: "./fonts/Rubik-Italic-VariableFont_wght.ttf",
//   weight: "400"
// });

const rubikNormal = localFont({
  src: './fonts/Rubik-VariableFont_wght.ttf',
  weight: '400 700',
});

// =============================================================================
// Layout Props
// =============================================================================

// =============================================================================
// Layout Metadata
// =============================================================================
export const metadata: Metadata = {
  title: {
    template: '%s | Frontend quiz app',
    default: 'Frontend Mentor | Frontend quiz app',
  },
  description:
    'This is a solution to the Frontend quiz app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
};

// =============================================================================
// Layout Component
// =============================================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${rubikNormal} bg-gray-200 bg-mobile-light bg-no-repeat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
