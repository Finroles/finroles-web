import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Finroles | AI-Powered Hiring Intelligence Platform',
  description: 'Finroles helps companies hire smarter using AI-driven candidate matching, role intelligence, and structured hiring workflows.',
  metadataBase: new URL('https://finroles.com'),
  openGraph: {
    title: 'Finroles | AI-Powered Hiring Intelligence Platform',
    description: 'Finroles helps companies hire smarter using AI-driven candidate matching, role intelligence, and structured hiring workflows.',
    url: 'https://finroles.com',
    siteName: 'Finroles',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finroles | AI-Powered Hiring Intelligence Platform',
    description: 'Finroles helps companies hire smarter using AI-driven candidate matching, role intelligence, and structured hiring workflows.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body>
        {children}
      </body>
    </html>
  );
}
