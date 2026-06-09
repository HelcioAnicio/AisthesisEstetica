import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Aisthésis — Clínica de Estética & Pilates',
  description:
    'Centro especializado em estética facial, corporal e pilates. Tratamentos personalizados com tecnologia de ponta. Agende sua visita.',
  icons: {
    icon: '/aisthesis.png',
  },
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
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        />
      </head>
      <body className='min-h-full flex flex-col antialiased'>{children}</body>
    </html>
  );
}
