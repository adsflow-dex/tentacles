import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google';
import './globals.css'
import { ThemeProvider } from '@/context/theme-provider';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AdsFlow',
  description: 'Your new favourite Advertisement solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={comfortaa.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
