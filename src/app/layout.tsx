import type { Metadata } from 'next'
import { Open_Sans, Raleway } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/theme-provider';

const font = Open_Sans({ subsets: ['latin'] });
const display = Raleway({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'AdsFlow',
  description: 'Your new favourite Advertisement solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={`${font.className} ${display.variable} selection:bg-[rgb(3_255_189)] selection:text-[#232323]`}>
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
