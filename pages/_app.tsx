import '@/styles/globals.css';
import '@/components/Icon/fontawesome.ts';
import type { AppProps } from 'next/app';
import { Space_Grotesk, Space_Mono, BioRhyme } from '@next/font/google';
import Header from '@/components/Header';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import Link from 'next/link';
import { repositoryName } from '../prismicio.js';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const bioRhyme = BioRhyme({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-biorhyme',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <main
          className={`${spaceGrotesk.variable} ${bioRhyme.variable} ${spaceMono.variable}`}
        >
          <Header />
          <Component {...pageProps} />
        </main>
      </PrismicPreview>
    </PrismicProvider>
  );
}
