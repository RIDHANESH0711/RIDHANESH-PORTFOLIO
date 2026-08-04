import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollProgress } from '@/components/scroll-progress';
import { ParticlesBackground } from '@/components/particles-background';
import { MouseGlow } from '@/components/mouse-glow';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ridhanesh.dev'),
  title: {
    default: 'RIDHANESH T — AI & Data Science Student',
    template: '%s | RIDHANESH T',
  },
  description:
    'RIDHANESH T is an Artificial Intelligence & Data Science student building intelligent solutions with AI, machine learning, and computer vision.',
  keywords: [
    'RIDHANESH T',
    'AI Engineer',
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Vision',
    'Face Recognition',
    'Java',
    'Python',
    'Data Science',
    'Portfolio',
  ],
  authors: [{ name: 'RIDHANESH T' }],
  creator: 'RIDHANESH T',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ridhanesh.dev',
    title: 'RIDHANESH T — AI & Data Science Student',
    description:
      'Building Intelligent Solutions with Artificial Intelligence. AI & Data Science student at VSB Engineering College.',
    siteName: 'RIDHANESH T Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RIDHANESH T — AI & Data Science Student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RIDHANESH T — AI & Data Science Student',
    description:
      'Building Intelligent Solutions with Artificial Intelligence.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="robots" href="/robots.txt" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <ParticlesBackground />
          <MouseGlow />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
