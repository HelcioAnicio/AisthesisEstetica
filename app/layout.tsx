import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const siteUrl = 'https://aisthesisestetica.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aisthésis — Clínica de Estética & Pilates em Caxias do Sul',
    template: '%s | Aisthésis',
  },
  description:
    'Clínica especializada em estética facial, corporal e Pilates em Caxias do Sul, RS. Limpeza de pele, botox, microagulhamento e mais. Agende sua consulta!',
  keywords: [
    'clínica estética caxias do sul',
    'estética facial caxias do sul',
    'pilates caxias do sul',
    'limpeza de pele caxias do sul',
    'botox caxias do sul',
    'microagulhamento',
    'curso limpeza de pele',
    'aisthesis estetica',
    'estética e pilates caxias',
  ],
  authors: [{ name: 'Aisthésis Clínica de Estética & Pilates' }],
  creator: 'Aisthésis',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Aisthésis Clínica de Estética & Pilates',
    title: 'Aisthésis — Clínica de Estética & Pilates em Caxias do Sul',
    description:
      'Clínica especializada em estética facial, corporal e Pilates em Caxias do Sul. Agende sua consulta!',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aisthésis Clínica de Estética & Pilates — Caxias do Sul, RS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aisthésis — Clínica de Estética & Pilates em Caxias do Sul',
    description:
      'Clínica especializada em estética facial, corporal e Pilates em Caxias do Sul, RS.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/aisthesis.png', type: 'image/png' }],
    apple: '/aisthesis.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Aisthésis Clínica de Estética & Pilates',
  alternateName: 'Aisthesis Estetica',
  url: siteUrl,
  logo: `${siteUrl}/aisthesis.png`,
  telephone: '+55-54-99940-0913',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Caxias do Sul',
    addressRegion: 'RS',
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  priceRange: '$$',
  sameAs: ['https://www.instagram.com/aisthesisestetica'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='pt-BR'
      className={`${playfair.variable} ${manrope.variable} h-full`}>
      <head>
        <link rel='preconnect' href='https://images.unsplash.com' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className='min-h-full flex flex-col antialiased'>
        <a
          href='#main-content'
          className='skip-link'>
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
