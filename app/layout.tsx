import type { Metadata } from 'next';
import { Bitter, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Toaster } from '@/components/ui/toast/toaster';

// Fonts setup
const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Finroles | Elite Finance Recruitment & Executive Search',
    template: '%s | Finroles',
  },
  description:
    'Bespoke executive search and specialist talent recruitment for Investment Banking, Private Equity, Hedge Funds, and Asset Management.',
  openGraph: {
    title: 'Finroles | Elite Finance Recruitment & Executive Search',
    description:
      'Bespoke executive search and specialist talent recruitment for Investment Banking, Private Equity, Hedge Funds, and Asset Management.',
    url: 'https://finroles.com',
    siteName: 'Finroles',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finroles | Elite Finance Recruitment & Executive Search',
    description:
      'Bespoke executive search and specialist talent recruitment for Investment Banking, Private Equity, Hedge Funds, and Asset Management.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bitter.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-body text-text bg-bg antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
