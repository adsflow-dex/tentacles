import type { Metadata } from 'next';
import { Open_Sans, Raleway } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/theme-provider';
import Header from '@/components/blocks/header';
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
        <html lang="en" suppressHydrationWarning={true}>
            <head>
                <Script
                    type="text/javascript"
                    strategy="beforeInteractive"
                    id="hs-script-loader"
                    src="https://js.hsforms.net/forms/embed/v2.js"
                ></Script>
            </head>
            <body
                className={`${font.className} ${display.variable} selection:bg-[rgb(3_255_189)] selection:text-[#232323]`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}

                    {/* <Script id="hubspot-newsletter" strategy="lazyOnload">
                        {`  hbspt.forms.create({
                        region: "na1",
                        portalId: "44910036",
                        formId: "0af17081-c55e-4d64-8839-2446cfcca715"
                    });
                    `}
                    </Script> */}
                </ThemeProvider>
            </body>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload" id="google-analytics">
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
