import type { Metadata } from 'next'
import { Open_Sans, Raleway } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/theme-provider';
import { Header } from '@/components';
import Script from 'next/script';

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
      <body
        className={`${font.className} ${display.variable} selection:bg-[rgb(3_255_189)] selection:text-[#232323]`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {/* <Header /> */}
          {children}
        </ThemeProvider>
      </body>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy='lazyOnload' id='google-analytics'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
    </html>
  );
}
