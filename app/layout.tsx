import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-mont',
});

export const metadata: Metadata = {
  title: 'Aisthésis - Clínica Estética & Pilates',
  description:
    'Um refúgio de tranquilidade onde a ciência estética encontra o cuidado humano para revelar sua melhor versão.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
