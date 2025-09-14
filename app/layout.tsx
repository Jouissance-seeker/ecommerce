import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';
import { PropsWithChildren } from 'react';
import { cn } from '../utils/cn';
import { Providers } from './providers';
import LayoutBase from '../containers/layout/base';

const fontBarlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'ecommerce',
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-dvh flex-col items-center',
          fontBarlow.className,
        )}
      >
        <LayoutBase>{props.children}</LayoutBase>
      </body>
    </html>
  );
}
