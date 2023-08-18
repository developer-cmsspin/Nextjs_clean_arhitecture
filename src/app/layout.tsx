import { Providers } from '@/infrastructure/persistence/redux/provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import React from 'react';
import "reflect-metadata";
import HeaderData from '../shared/components/header';
import './globals.css';


//https://github.com/khj0426/HJ_Devlog/blob/main/src/app/layout.tsx
//https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test',
  description: 'Test data',
  icons: {
    icon: '/images/favicon.webp',
  },
  metadataBase: new URL('https://www.google.com/'),
  openGraph: {
    url: 'https://www.google.com',
    title: 'Test',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/59411107?v=4',
        width: 800,
        height: 600,
      },
      {
        url: 'https://avatars.githubusercontent.com/u/59411107?v=4',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'XXXXXXXXXX',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>

      </Head>
      <body className={inter.className}>
        <HeaderData></HeaderData>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
