import '@/styles/globals.css';
import '@/components/Icon/fontawesome.ts';
import type { AppProps } from 'next/app';
import { Space_Grotesk, Space_Mono } from '@next/font/google';
import Header from '@/components/Header';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <Header />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
