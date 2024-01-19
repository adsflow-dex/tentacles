import type { Metadata } from 'next';
import { Open_Sans, Raleway } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/theme-provider';
import Script from 'next/script';
import og from './seo-preview.png';
import Head from 'next/head';

const font = Open_Sans({ subsets: ['latin'] });
const display = Raleway({ subsets: ['latin'], variable: '--font-display' });

// export const metadata: Metadata = {
//     title: 'AdsFlow',
//     description: 'Prioritize creator earnings via fair revenue sharing, diverse ad formats, and secure blockchain payments.',
//     openGraph:{
//       images:['./seo-preview.png']
//     }

// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      <html lang='en' suppressHydrationWarning={true}>
        <Head>
          <title>AdsFlow | Transparent Advertising on the Blockchain.</title>
          <meta
            name='description'
            content='Prioritize creator earnings via fair revenue sharing, diverse ad formats, and secure blockchain payments.'
          />
          <meta property='og:url' content='https://adsflow.net/' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Transparent Advertising on the Blockchain.'
          />
          <meta
            property='og:description'
            content='Prioritize creator earnings via fair revenue sharing, diverse ad formats, and secure blockchain payments.'
          />
          <meta property='og:image' content={og.src} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:domain' content='adsflow.net' />
          <meta property='twitter:url' content='https://adsflow.net/' />
          <meta
            name='twitter:title'
            content='Transparent Advertising on the Blockchain.'
          />
          <meta
            name='twitter:description'
            content='Prioritize creator earnings via fair revenue sharing, diverse ad formats, and secure blockchain payments.'
          />
          <meta name='twitter:image' content={og.src} />
        </Head>
        <Script
          type='text/javascript'
          strategy='beforeInteractive'
          id='hs-script-loader'
          src='https://js.hsforms.net/forms/embed/v2.js'></Script>
        <body
          className={`${font.className} ${display.variable} selection:bg-[rgb(3_255_189)] selection:text-[#232323]`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange>
            {children}
            {/* <Footer /> */}
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
